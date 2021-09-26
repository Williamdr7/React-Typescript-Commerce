import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const NavBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      boxShadow: "none",
    },
    headerContainer: {
      backgroundColor: "#fff",
      display: "flex",
      padding: "5px 40px",
      height: "60px",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        padding: "12px 24px",
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
        padding: "12px 16px",
        height: "40px",
      },
    },
    logo: {
      fontSize: "16px",
      padding: "12px 64px",
      color: "#000000",
      border: "1px solid black",
      fontWeight: "bold",
      [theme.breakpoints.down("md")]: {
        padding: "12px 50px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "12px 10px",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    search: {
      borderRadius: "4px",
      position: "relative",
      backgroundColor: "#EDEDF0",
      marginRight: theme.spacing(2),
      width: "438px",

      color: "#787885",
      [theme.breakpoints.down("md")]: {
        width: "250px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "130px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        marginTop: "8px",
      },
    },
    searchIconDesktop: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      zIndex: 100,
      color: "#787885",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    inputRoot: {
      color: "inherit",
    },
    inputField: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      backgroundColor: "#EDEDF0",
      color: "#19191D",
      width: "400px",
      height: "25px",
      [theme.breakpoints.down("md")]: {
        width: "250px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "130px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        paddingLeft: `16px`,
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
    },
    cartContainerDesktop: {
      display: "flex",
      alignItems: "center",
      color: "#fff",
      borderRadius: "4px",
      width: "180px",
      position: "relative",
      backgroundColor: "#2264D1",
      padding: "12px 19px",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    subTotal: {
      marginLeft: "auto",
    },
    searchIconMobile: {
      height: "100%",
      position: "absolute",
      zIndex: 100,
      right: "11px",
      color: "#787885",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerContentMobile: {
      height: "45px",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#000000",
      },
    },
    menuIcon: {
      width: "28px",
      height: "24px",
    },
  })
);

export default NavBarStyles;
