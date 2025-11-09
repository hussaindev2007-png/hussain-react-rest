import { product } from "./project";

export const getVisibleProducts = (categories) => {
  if (categories.length === 0) {
    return product;
  }

  const filterdProducts = product.filter((product) =>
    categories.includes(product.category)
  );

  return filterdProducts;
};