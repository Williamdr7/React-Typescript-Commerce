import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const DefaultIconButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    cartButton: {
      marginTop: "28px",
      width: "100%",
      textTransform: "none",
    },
  })
);

export default DefaultIconButtonStyles;
