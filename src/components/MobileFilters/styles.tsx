import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const MobileFiltersStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterMenuContext: {
      width: "100%",
      background: "transparent",
      height: "100vh",
    },
    transparentEffect: {
      width: "100%",
      height: "100vh",
      background: "rgba(0,0,0,0.2)",
      zIndex: 1500,
      position: "fixed",
      top: 0,
    },
    filterMenuContainer: {
      zIndex: 100000,
      backgroundColor: "#fff",
      position: "fixed",
      bottom: "0",
      width: "100%",
      height: "424px",
      background: "red",
    },
    filtersTitle: {
      fontSize: "14px",
      margin: "20px 24px 0 24px",
    },
    closeButton: {
      position: "absolute",
      right: "21px",
      top: "21px",
    },
  })
);

export default MobileFiltersStyles;
