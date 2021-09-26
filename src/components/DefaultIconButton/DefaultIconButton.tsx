import React, { ReactElement } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import DefaultIconButtonStyles from "./styles";

interface Props {
  isAdded: boolean;
  onClick: any;
  disabled: boolean;
}

export default function DefaultIconButton({
  isAdded,
  onClick,
  disabled,
}: Props): ReactElement {
  const classes = DefaultIconButtonStyles();
  return (
    <div>
      <Button
        className={classes.cartButton}
        onClick={onClick}
        color="primary"
        disabled={disabled}
        variant="outlined"
        startIcon={isAdded ? <CheckIcon style={{ color: "#459E31" }} /> : null}
      >
        <Typography
          style={{ color: isAdded ? "black" : "#2264D1" }}
          variant="inherit"
        >
          {isAdded ? "Added" : "Add to cart"}
        </Typography>
      </Button>
    </div>
  );
}
