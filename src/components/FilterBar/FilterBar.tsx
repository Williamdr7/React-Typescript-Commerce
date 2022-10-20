import React, { ReactElement, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FilterBarStyles from "./styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../store/actions/FilterActions";
import { FiltersInterface, FilterInterface } from "../../store/filters";
import { filterProducts } from "../../store/actions/ProductsActions";
import {
  ProductInterface,
  ProductsInterface,
} from "../../store/productsReducer";
import { setMobileFilters } from "../../store/actions/MobileMenuAction";

interface FiltersBarInterface {
  max: number;
  min: number;
  rating: number;
}

export default function FilterBar(): ReactElement {
  const { filters }: FilterInterface | any = useSelector<FiltersInterface>(
    (state) => state.filters
  );
  const { products }: ProductInterface[] | any = useSelector<ProductsInterface>(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const initialState = { max: 0, min: 0, rating: 0 };

  const [newFilters, setNewFilters] = useState<FiltersBarInterface>({
    max: 0,
    min: 0,
    rating: 1,
  });
  const classes = FilterBarStyles();
  const INDEX_OPTIONS = [1, 2, 3, 4, 5];

  const handleChange = (value: string | number | unknown, type: string) => {
    setNewFilters((stFilters: FiltersBarInterface) => ({
      ...stFilters,
      [type]: value,
    }));
  };

  const handleClick = () => {
    dispatch(setFilters({ ...filters, ...newFilters }));
    dispatch(filterProducts(products, newFilters));
    dispatch(setMobileFilters(false));
  };

  const clearFilters = () => {
    dispatch(setFilters({ ...filters, ...initialState }));
    setNewFilters(initialState);
  };

  return (
    <AppBar className={classes.barContainer} position="static">
      <Toolbar className={classes.filtersContainer}>
        <div className={classes.inputsContainer}>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Max"
            value={newFilters.max ? newFilters.max : ""}
            className={classes.filterInput}
            onChange={(ev) => handleChange(ev.target.value, "max")}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Min"
            value={newFilters.min ? newFilters.min : ""}
            className={classes.filterInput}
            onChange={(ev) => handleChange(ev.target.value, "min")}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
          />
          <FormControl>
            <InputLabel
              className={classes.ratingInputLabel}
              htmlFor="outlined-adornment-amount"
            >
              RATING
            </InputLabel>
            <Select
              className={`${classes.filterInput} ${classes.selectInput}`}
              value={[newFilters.rating]}
              onChange={(ev) => handleChange(ev.target.value, "rating")}
              input={<OutlinedInput label="Name" />}
            >
              {INDEX_OPTIONS.map((index: number) => (
                <MenuItem key={index} value={index}>
                  {`${index !== 5 ? index + " and above" : index}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.filtersButton}>
          <Button
            color="primary"
            className={classes.clearButton}
            onClick={clearFilters}
          >
            Clear
          </Button>
          <Button
            color="primary"
            className={classes.applyButtonText}
            variant="outlined"
            onClick={handleClick}
          >
            Apply filters
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
