import { makeStyles, createStyles } from "@material-ui/core/styles";

const CartStyles = makeStyles(() =>
  createStyles({
    cartBox: {
      width: "35px",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      position: "relative",
      padding: "0 3px",
      height: "25px",
    },
    cartIcon: {
      width: "24px",
      height: "23px",
    },
    countContainer: {
      display: "inline-flex",
      alignItems: "center",
      position: "absolute",
      padding: "5px",

      top: "-25%",
      right: "0",
      height: "8px",
      width: "8px",
      textAlign: "center",
      borderRadius: "50%",
      backgroundColor: "#F44336",
    },
    count: {
      fontSize: "10px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
  })
);

export default CartStyles;
