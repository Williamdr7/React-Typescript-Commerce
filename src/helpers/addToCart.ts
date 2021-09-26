export default function addToCart(item: any) {
  //@ts-ignore
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  const hasItem = currentCart?.findIndex((i: any) => i.id === item.id);

  if (hasItem !== -1 && hasItem) {
    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...currentCart.filter((i: any) => i.id === item.id),
        { ...item, amount: currentCart[hasItem].amount + item.amount },
      ])
    );
  } else {
    localStorage.setItem("cart", JSON.stringify([...currentCart, item]));
  }
}
