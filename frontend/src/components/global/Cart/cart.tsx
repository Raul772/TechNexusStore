// import { createCheckout } from "@/actions/checkout";
import { CartContext } from "@/providers/CartProvider/cart";
import { Separator } from "@radix-ui/react-separator";
// import { loadStripe } from '@stripe/stripe-js';
import { useContext } from "react";
import { Button } from "../ui/button";
import TitleBadge from "../ui/title-badge";
import CartItem from "./cart-item";


const Cart = () => {
  const { products, total, subtotal, totalDiscount } = useContext(CartContext);

  // Server Action
  const handleFinishPurchaseClick = async () => {
    // const checkout = await createCheckout(products);
    // console.log(checkout);

    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "");

    // stripe?.redirectToCheckout({
    //   sessionId: checkout.id,
    // });
  }


  return (
    <div className="flex h-full flex-col gap-8">
      <TitleBadge icon="cart">Carrinho</TitleBadge>

      <div className="flex h-full flex-col gap-5 overflow-y-auto">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center opacity-75">
            Carrinho vazio, continue comprando!
          </p>
        )}
      </div>

      {products[0] && (
        <div className="flex flex-col gap-3">
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>Grátis</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total:</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button onClick={handleFinishPurchaseClick} className="mt-7 font-bold uppercase">Finalizar Compra</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
