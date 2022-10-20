import React, { useEffect, useState } from "react";
import ProductStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import DefaultIconButton from "../DefaultIconButton/DefaultIconButton";
import { ProductInterface } from "../../store/productsReducer";
import addToCart from "../../helpers/addToCart";
import { setCartAmount, setCartPrice } from "../../store/actions/CartAction";
import calculateAmount from "../../helpers/calculateAmount";
import { useDispatch } from "react-redux";
import Toast from "../Toast/Toast";

interface Props {
  product: ProductInterface;
}

interface IOption {
  label: string;
  value: string;
}

export default function Product({ product }: Props) {
  const [amount, setAmount] = useState<number | unknown>(1);
  const [showToast, setShowToast] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [amountOptions, setAmountOptions] = useState<IOption[]>();
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const classes = ProductStyles();

  useEffect(() => {
    let newOptions: any = [];
    for (let i = 1; i < product.available; i++) {
      newOptions = [...newOptions, { label: i.toString(), value: i }];
    }
    setAmountOptions(newOptions);
  }, [product]);

  const handleClick = () => {
    let { totalPrice, productsAmount } = calculateAmount();
    addToCart({ ...product, amount });
    //@ts-ignore
    const totalAmount = productsAmount + amount;
    const price = totalPrice + product.priceCents;
    dispatch(setCartAmount(totalAmount));
    dispatch(setCartPrice(price));
    setShowToast(true);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <>
      {showToast && (
        <Toast
          message="Added to cart successfully"
          duration={2000}
          setShowToast={setShowToast}
        />
      )}
      <div className={classes.productContainer}>
        <img
          className={classes.productImage}
          alt="product"
          src={product.image.url}
        />
        <Typography className={classes.productDescription}>
          {product.description}
        </Typography>
        <div className={classes.ratingContainer}>
          <Rating
            size="small"
            name="rating"
            defaultValue={product.rating}
            precision={0.5}
          />
          <Typography className={classes.ratingCount}>
            {product.rating}
          </Typography>
        </div>
        <div className={classes.productInfoRow}>
          <Typography variant="h4" className={classes.productPrice}>
            {product.price}
          </Typography>
          <Select
            className={`${classes.selectNumber} ${classes.outlinedInput}`}
            value={[amount]}
            onChange={(ev) => setAmount(ev.target.value)}
            input={<OutlinedInput label="Name" />}
          >
            {amountOptions &&
              amountOptions[0] &&
              amountOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
          <Select
            className={`${classes.selectNumber} ${classes.selectMobile}`}
            value={[amount]}
            onChange={(ev) => setAmount(ev.target.value)}
          >
            {amountOptions &&
              amountOptions[0] &&
              amountOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </div>
        <DefaultIconButton
          onClick={handleClick}
          disabled={isAdded}
          isAdded={isAdded}
        />
      </div>
    </>
  );
}
