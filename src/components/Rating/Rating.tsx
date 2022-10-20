import React from "react";
import RatingStyles from "./styles";
import StarIcon from "@material-ui/icons/Star";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import Typography from "@material-ui/core/Typography";

interface RatingProps {
  count: number;
}

export default function Rating({ count }: RatingProps) {
  const classes = RatingStyles();

  return (
    <div className={classes.ratingContainer}>
      <StarIcon className={classes.starIcon} />
      <StarIcon className={classes.starIcon} />
      <StarIcon className={classes.starIcon} />
      <StarIcon className={classes.starIcon} />
      <StarHalfOutlinedIcon className={classes.starIcon} />
      <Typography className={classes.ratingCount}>4.99</Typography>
    </div>
  );
}
