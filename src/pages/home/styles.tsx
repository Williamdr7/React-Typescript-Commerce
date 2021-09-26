import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "75%",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },

    paginate: {
      margin: "40px auto",
      display: "inline-flex",
      textAlign: "center",
      "& .Mui-selected": {
        backgroundColor: "#1671C0",
        color: "#fff",
      },
      "& .Mui-disabled ": {
        display: "none",
      },
    },
    paginateContainer: {
      margin: "auto",
      textAlign: "center",
    },
    statusMessage: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      margin: "auto",
    },
    formContainer: {
      border: "none",
      width: "auto",
      display: "block",
      margin: "auto",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        margin: "0",
      },
    },
    sortInputLabel: {
      marginLeft: "18px",
      marginTop: "2px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    selectInput: {
      width: "136px",
      fontWeight: 500,
      color: "#19191D",
      margin: "8px",
      height: "36px",
      backgroundColor: "transparent",
    },
    ratingFilterContainer: {
      width: "calc(100% - 20px)",
      padding: "0 10px",
      display: "inline-flex",
      alignItems: "center",
      marginTop: "21px",
      justifyContent: "space-between",
      [theme.breakpoints.up("xs")]: {
        padding: "0 6px",
      },
    },
    filterLink: {
      fontSize: "14px",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    desktopFilters: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    cartContainerMobile: {
      display: "flex",
      alignItems: "center",
      color: "#fff",
      margin: "0 auto 10px auto",
      borderRadius: "4px",
      width: "85%",
      position: "relative",
      backgroundColor: "#2264D1",
      padding: "12px 19px",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    subTotal: {
      marginLeft: "55px",
    },
  })
);

export default HomeStyles;
