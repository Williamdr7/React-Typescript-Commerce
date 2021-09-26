import React, { ReactElement } from "react";
import FilterBar from "../FilterBar/FilterBar";
import MobileFiltersStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { setMobileFilters } from "../../store/actions/MobileMenuAction";
import { useDispatch } from "react-redux";

export default function MobileFilters(): ReactElement {
  const classes = MobileFiltersStyles();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMobileFilters(false));
  };
  return (
    <>
      <div className={classes.transparentEffect} />
      <div className={classes.filterMenuContainer}>
        <div>
          <CloseIcon onClick={handleClick} className={classes.closeButton} />
        </div>
        <Typography className={classes.filtersTitle} variant="h6" noWrap>
          FILTERS
        </Typography>
        <FilterBar />
      </div>
    </>
  );
}
