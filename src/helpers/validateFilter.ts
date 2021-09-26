import { ProductInterface } from "../store/productsReducer";

export default function validateFilters(products: any, filters: any) {
  let newProducts = products;

  Object.keys(filters)
    .filter((value: any) => !!filters[value])
    .map((filterType) => {
      newProducts = selectFilterFunction(
        filterType,
        newProducts,
        filters[filterType]
      );
      return true;
    });

  return newProducts;
}

const selectFilterFunction = (type: string, products: any, filter: any) => {
  switch (type) {
    case "max":
      return products.filter(
        (prod: ProductInterface) => prod.priceCents <= filter * 100
      );
    case "min":
      return products.filter(
        (prod: ProductInterface) => prod.priceCents >= filter * 100
      );
    case "rating":
      return products.filter((prod: ProductInterface) => prod.rating >= filter);
    case "search":
      return products.filter((prod: ProductInterface) =>
        prod.description.toLowerCase().includes(filter.toLowerCase())
      );
  }
};
