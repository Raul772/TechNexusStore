

import { ProductWithTotalPrice } from "@/helpers/product";
// import { CartContext } from "@/providers/cart";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import DiscountBadge from "../global/ui/discount-badge";
import { Button } from "../global/ui/button";
import { CartContext } from "@/providers/CartProvider/cart";

interface ProductInfoProps{
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps ) => {
  const { name, discountPercentage, basePrice, totalPrice, description } = product;
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);


  const handleQuantityIncreaseClick = () => setQuantity(quantity + 1);
  const handleQuantityDecreaseClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCartClick = () => {
    addProductToCart({...product, quantity});
  }


  return (
    <div className="flex flex-col px-5">
      <h1 className="text-lg">{name}</h1>

      {discountPercentage > 0 && (
        <p className="text-sm opacity-75">
          De:{" "}
          <span className="line-through">
            R$ {Number(basePrice).toFixed(2).replace(".", ",")}
          </span>
        </p>
      )}

      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">
          R$ {Number(totalPrice).toFixed(2).replace(".", ",")}
        </h2>

        {discountPercentage > 0 && (
          <DiscountBadge>{discountPercentage}</DiscountBadge>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Button
          onClick={handleQuantityDecreaseClick}
          size="icon"
          variant="outline"
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          onClick={handleQuantityIncreaseClick}
          size="icon"
          variant="outline"
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h2 className="text-base font-bold">Descrição</h2>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase" onClick={handleAddToCartClick}>
        Adicionar ao Carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent p-5">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-sm">
              Entrega via <span className="font-bold">FSPacket&reg;</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p>Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
