export default function calculateAmount() {
  let productsAmount = 0;
  let totalPrice = 0;
  //@ts-ignore
  JSON.parse(localStorage.getItem("cart"))?.map((prod: any) => {
    productsAmount += prod.amount;
    totalPrice += prod.priceCents;
    return true;
  });

  return { productsAmount, totalPrice };
}
