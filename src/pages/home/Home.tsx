import React, { ReactElement, useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { Grid } from "@material-ui/core";
import HomeStyles from "./styles";
import { configurePaginate } from "../../helpers/configurePaginate";
import Pagination from "@material-ui/lab/Pagination";
import {
  ProductInterface,
  ProductsInterface,
} from "../../store/productsReducer";
import { useSelector, useDispatch } from "react-redux";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {
  setFilteredProducts,
  setProducts,
} from "../../store/actions/ProductsActions";
import { getAllProducts } from "../../services/dato-cms";
import Typography from "@material-ui/core/Typography";
import sortData, { SortTypes } from "../../helpers/sortData";
import { MobileFiltersInterface } from "../../store/mobileFilters";
import { setMobileFilters } from "../../store/actions/MobileMenuAction";
import MobileFilters from "../../components/MobileFilters/MobileFilters";
import FilterBar from "../../components/FilterBar/FilterBar";
import Cart from "../../components/Cart/Cart";
import { CartInterface } from "../../store/cart";
import { INDEX_OPTIONS, range } from "./constants";

export default function Home(): ReactElement {
  const classes = HomeStyles();

  const dispatch = useDispatch();
  const { filteredProducts }: ProductInterface[] | any =
    useSelector<ProductsInterface>((state) => state.products);
  const { mobileFilters }: boolean | any = useSelector<MobileFiltersInterface>(
    (state) => state.mobileFilters
  );
  const [paginatedProducts, setPaginatedProducts] =
    useState<ProductInterface[]>();
  const { cart }: CartInterface | any = useSelector<CartInterface>(
    (state) => state.cart
  );

  const [page, setPage] = useState<number>(1);
  const [sortType, setSortType] = useState<SortTypes>("Rating");
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    getAllProducts()
      .then((data) => {
        dispatch(setProducts(data));
        dispatch(setFilteredProducts(data));
        doPaginate(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setFilteredProducts(sortData(sortType, filteredProducts)));
    doPaginate(sortData(sortType, filteredProducts));
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  useEffect(() => {
    doPaginate(filteredProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts, page, range]);

  const setMobileFiltersState = () => {
    dispatch(setMobileFilters(!mobileFilters));
  };

  const doPaginate = (currentProducts: ProductInterface[]) => {
    const paginateSettings = configurePaginate(
      currentProducts,
      page,
      range
    ) || {
      newProducts: [],
      newPage: 1,
    };

    setPaginatedProducts(paginateSettings?.newProducts);
    setPage(paginateSettings?.newPage);
  };

  const handlePaginate = (_ev: any, value: number) => {
    setPage(value);
  };

  if (!loading) {
    return (
      <>
        {mobileFilters ? (
          <MobileFilters />
        ) : (
          <div className={classes.desktopFilters}>
            <FilterBar />
          </div>
        )}
        <div className={classes.root}>
          <div className={classes.ratingFilterContainer}>
            <FormControl className={classes.formContainer}>
              <InputLabel
                className={classes.sortInputLabel}
                htmlFor="outlined-adornment-amount"
              >
                SORT BY
              </InputLabel>
              <Select
                className={`${classes.selectInput}`}
                value={[sortType]}
                onChange={(ev: any) => setSortType(ev.target.value)}
                input={<OutlinedInput label="Name" />}
              >
                {INDEX_OPTIONS.map((option: string, i) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              className={classes.filterLink}
              color="primary"
              variant="h5"
              onClick={() => setMobileFiltersState()}
              noWrap
            >
              FILTERS
            </Typography>
          </div>
          <Grid container>
            {paginatedProducts && paginatedProducts.length ? (
              paginatedProducts.map((prod: ProductInterface) => {
                return (
                  <Grid key={prod.id} item xs={6} lg={4}>
                    <Product product={prod} />
                  </Grid>
                );
              })
            ) : (
              <Typography className={classes.statusMessage} variant="h4" noWrap>
                No products available
              </Typography>
            )}
          </Grid>

          {paginatedProducts && paginatedProducts.length ? (
            <div className={classes.paginateContainer}>
              <Pagination
                className={classes.paginate}
                count={Math.ceil(filteredProducts.length / range || 1) || 1}
                page={page}
                variant="outlined"
                color="primary"
                onChange={handlePaginate}
              />
            </div>
          ) : null}

          <div className={classes.cartContainerMobile}>
            <Cart count={cart.amount} />
            <Typography noWrap className={classes.subTotal} variant="inherit">
              Sub total: {cart.price / 100} €
            </Typography>
          </div>
        </div>
      </>
    );
  } else
    return (
      <Typography className={classes.statusMessage} variant="h4" noWrap>
        Loading...
      </Typography>
    );
}
