import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Cart from "../Cart/Cart";
import NavBarStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { setFilters } from "../../store/actions/FilterActions";
import { useSelector, useDispatch } from "react-redux";
import { FiltersInterface, FilterInterface } from "../../store/filters";
import { filterProducts } from "../../store/actions/ProductsActions";
import {
  ProductInterface,
  ProductsInterface,
} from "../../store/productsReducer";
import { CartInterface } from "../../store/cart";
import calculateAmount from "../../helpers/calculateAmount";
import { setCartAmount, setCartPrice } from "../../store/actions/CartAction";

export default function NavBar() {
  const [searchFilter, setSearchFilter] = useState("");
  const dispatch = useDispatch();
  const { products }: ProductInterface[] | any = useSelector<ProductsInterface>(
    (state) => state.products
  );
  const { filters }: FilterInterface | any = useSelector<FiltersInterface>(
    (state) => state.filters
  );

  const { cart }: CartInterface | any = useSelector<CartInterface>(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(setCartAmount(calculateAmount().productsAmount));
    dispatch(setCartPrice(calculateAmount().totalPrice));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = NavBarStyles();

  function handleChange(value: string) {
    if (!value) {
      dispatch(setFilters({ ...filters, search: "" }));
      dispatch(filterProducts(products, { ...filters, search: "" }));
      setSearchFilter(value);
    } else {
      setSearchFilter(value);
    }
  }

  const handleSearch = () => {
    dispatch(setFilters({ ...filters, search: searchFilter }));
    dispatch(filterProducts(products, { ...filters, search: searchFilter }));
  };
  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.headerContainer}>
          <div className={classes.titleContainer}>
            <Typography className={classes.logo} variant="h4" noWrap>
              LOGO
            </Typography>
          </div>
          <div className={classes.headerContentMobile}>
            <div className={classes.search}>
              <div className={classes.searchIconDesktop}>
                <SearchIcon onClick={handleSearch} />
              </div>
              <div className={classes.searchIconMobile}>
                <SearchIcon onClick={handleSearch} />
              </div>
              <InputBase
                placeholder="Search here..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputField,
                }}
                value={searchFilter}
                inputProps={{ "aria-label": "search" }}
                onChange={(ev) => handleChange(ev.target.value)}
              />
            </div>
            <MenuIcon className={classes.menuIcon} />
          </div>
          <div className={classes.cartContainerDesktop}>
            <Cart count={cart.amount} />
            <Typography noWrap className={classes.subTotal} variant="inherit">
              Sub total: {cart.price / 100} €
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
