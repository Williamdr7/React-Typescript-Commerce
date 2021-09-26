import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const RatingStyles = makeStyles((theme: Theme) =>
  createStyles({
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "35px",
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
    starIcon: {
      color: "#FB8200",
      width: "16px",
      height: "15px",
    },
  })
);

export default RatingStyles;
