import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const ToastStyles = makeStyles((theme: Theme) =>
  createStyles({
    toastContainer: {
      width: "300px",
      display: "inline-flex",
      alignItems: "center",
      textAlign: "center",
      height: "50px",
      position: "fixed",
      boxShadow:
        "0px 2px 4px rgba(59, 69, 123, 0.2), 0px 4px 8px rgba(92, 107, 192, 0.2)",
      right: "20px",
      padding: "0 20px",
      bottom: "20px",
      zIndex: 1000000,
      backgroundColor: "#fff",
      color: "#000",
      "& .MuiSvgIcon-fontSizeInherit": {
        color: "#459E31",
      },
    },
    checkIcon: {
      color: "#459E31",
      marginRight: "15px",
    },
  })
);

export default ToastStyles;
