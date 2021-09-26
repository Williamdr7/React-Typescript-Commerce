import React, { ReactElement } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Typography from "@material-ui/core/Typography";
import CartStyles from "./styles";

interface Props {
  count: number;
}

export default function Cart({ count }: Props): ReactElement {
  const classes = CartStyles();
  return (
    <div className={classes.cartBox}>
      <ShoppingCartOutlinedIcon className={classes.cartIcon} />
      <div className={classes.countContainer}>
        <Typography className={classes.count} variant="inherit">
          {count}
        </Typography>
      </div>
    </div>
  );
}
