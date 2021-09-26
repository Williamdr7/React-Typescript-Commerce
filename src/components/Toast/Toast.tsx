import React from "react";
import Typography from "@material-ui/core/Typography";
import ToastStyles from "./styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  duration: any;
  setShowToast: any;
}

export default function Toast({ message, duration, setShowToast }: ToastProps) {
  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, duration);
  }, [duration, setShowToast]);

  const classes = ToastStyles();

  return (
    <div className={classes.toastContainer}>
      <CheckCircleIcon className={classes.checkIcon} />
      <Typography>{message}</Typography>
    </div>
  );
}
