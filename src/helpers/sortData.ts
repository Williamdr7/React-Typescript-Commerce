import { ProductInterface } from "../store/productsReducer";

export type SortTypes = "Rating" | "Price: low to high" | "Price: high to low";

export default function sortData(
  sortType: SortTypes,
  products: ProductInterface[]
) {
  let newProducts = products;

  switch (sortType) {
    case "Rating":
      newProducts = newProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "Price: low to high":
      newProducts = newProducts.sort((a, b) => a.priceCents - b.priceCents);
      break;
    case "Price: high to low":
      newProducts = newProducts.sort((a, b) => b.priceCents - a.priceCents);
      break;
    default:
      newProducts = products;
  }

  return newProducts;
}
