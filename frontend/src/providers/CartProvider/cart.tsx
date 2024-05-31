"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

//  Definição dos dados a serem compatilhados no contexto
export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  deleteCartItem: (productId: string) => void;
}

//  Criação do contexto
export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  total: 0, 
  subtotal: 0, 
  totalDiscount: 0,
  addProductToCart: () => { },
  decreaseProductQuantity: () => { },
  increaseProductQuantity: () => { },
  deleteCartItem: () => { }
});



//  Criação do Provider
const CartProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<CartProduct[]>(JSON.parse(localStorage.getItem("@fsw-store/cart-products") || "[]"));

  useEffect(() => localStorage.setItem("@fsw-store/cart-products", JSON.stringify(products)), [products]);

  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0)
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity;
    }, 0)
  }, [products]);

  const totalDiscount = subtotal - total;


  const addProductToCart = (product: CartProduct) => {
    const ProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (ProductAlreadyOnCart) {
      setProducts((prev) => {
        return prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        });
      });
      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId && cartProduct.quantity > 1) {
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        }
        return cartProduct;
      }),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      }),
    );
  };

  const deleteCartItem = (productId: string) => {
    setProducts((prev) => prev.filter(cartItem => cartItem.id !== productId));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        deleteCartItem,
        total,
        subtotal,
        totalDiscount,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
