import { CartContext, CartProduct } from "@/providers/CartProvider/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";
import { Img } from "react-image";
import { Button } from "../ui/button";


interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {


  const { decreaseProductQuantity, increaseProductQuantity, deleteCartItem } = useContext(CartContext);
  const handleDecreaseQuantityClick = () => decreaseProductQuantity(product.id);
  const handleIncreaseQuantityClick = () => increaseProductQuantity(product.id);
  const handleDeleteCartItemClick = () => deleteCartItem(product.id);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* PARTE DIREITA (FOTO E NOME) */}

        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Img
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {product.name}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="mt-2 flex items-center gap-1">
            <Button onClick={handleDecreaseQuantityClick} size="icon" variant="outline" className="h-8 w-8">
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button onClick={handleIncreaseQuantityClick} size="icon" variant="outline" className="h-8 w-8">
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button onClick={handleDeleteCartItemClick} size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
