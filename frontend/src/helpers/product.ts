import IProduct from "@/components/global/interfaces/IProduct";

export interface ProductWithTotalPrice extends IProduct {
  totalPrice: number;
}

export const computeProductTotalPrice = (product: IProduct): ProductWithTotalPrice => {
  const basePrice = product.basePrice;

  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: basePrice,
    };
  }

  const totalDiscount = basePrice * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: basePrice - totalDiscount,
  };
};
