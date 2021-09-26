import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const ProductStyles = makeStyles((theme: Theme) =>
  createStyles({
    productContainer: {
      border: "1px solid #BCBDBC",
      borderRadius: "4px",
      height: "484px",
      width: "256px",
      margin: "auto",
      padding: "16px",
      marginTop: "24px",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        width: "200px",
      },
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        marginTop: "10px",
        width: "180px",
        padding: "8px",
      },
      "@media (max-width: 400px)": {
        height: "auto",
        marginTop: "10px",
        width: "160px",
        padding: "8px",
      },
      "@media (max-width: 360px)": {
        height: "auto",
        marginTop: "10px",
        width: "140px",
        padding: "8px",
      },
    },
    productImage: {
      width: "100%",
      height: "224px",
      margin: "auto",
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        width: "100%",
      },
    },
    productDescription: {
      marginTop: "12px",
      fontSize: "16px",
      width: "80%",
      height: "74px",
      lineHeight: "24px",
      [theme.breakpoints.down("xs")]: {
        height: "90px",
        minHeight: "74px",
        width: "100%",
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
    productInfoRow: {
      width: "100%",
      height: "36px",
      marginTop: "18px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        marginTop: "10px",
      },
    },
    productPrice: {
      fontSize: "24px",
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    selectNumber: {
      width: "90px",
      height: "36px",
      [theme.breakpoints.down("xs")]: {
        width: "60px",
        height: "26px",
      },
    },
    outlinedInput: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    ratingContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "35px",
      height: "",
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        marginTop: "10px",
      },
    },
    ratingCount: {
      fontSize: "14px",
      color: "#5E6366",
      marginLeft: "8PX",
    },
    selectMobile: {
      width: "50px",
      "&:after": {
        border: "none",
      },
      "&:before": {
        border: "none",
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

export default ProductStyles;
