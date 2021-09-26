import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const FilterBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    barContainer: {
      backgroundColor: "#F9F9F9",
      width: "95%",
      margin: "auto",
      boxShadow: "none",
      marginTop: "34px",
      border: "none",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        backgroundColor: "#fff",
      },
    },
    filtersContainer: {
      height: "72px",
      display: "flex",
      alignItems: "center",
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    filtersButton: {
      height: "40px",
      marginLeft: "auto",
      alignSelf: "center",
    },
    inputsContainer: {
      position: "absolute",
      left: "50%",
      transform: "translatex(-50%)",
      display: "flex",
      justifyContent: "space-evenly",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        left: "35%",
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
        position: "relative",
        transform: "none",
        left: "0",
        margin: "0",
      },
    },
    filterInput: {
      margin: "8px",
      height: "36px",
      width: "112px",
      display: "flex",
    },
    ratingInputLabel: {
      marginLeft: "18px",
      marginTop: "2px",
      fontSize: "14px",
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        marginTop: "25px",
      },
    },
    applyButtonText: {
      fontSize: "16px",
      textTransform: "none",
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        position: "fixed",
        bottom: "24px",
        right: "15%",
      },
    },
    selectInput: {
      width: "136px",
      fontWeight: 500,
      color: "#19191D",
      "& :focus": {
        backgroundColor: "transparent",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "30px",
      },
    },
    clearButton: {
      position: "fixed",
      bottom: "24px",
      left: "15%",
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
    },
  })
);

export default FilterBarStyles;
