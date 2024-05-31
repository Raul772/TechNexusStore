import { ProductWithTotalPrice } from "@/helpers/product";
import DiscountBadge from "./discount-badge";
import { Link } from "react-router-dom";
import { Img } from "react-image";


interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link to={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] min-w-[100px] items-center justify-center rounded-lg bg-accent">
          <Img
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            alt={product.name}
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex flex-col items-start gap-x-2">
            {(product.discountPercentage > 0 && (
              <>
                <p className="whitespace-nowrap font-semibold">
                  R$ {Number(product.totalPrice).toFixed(2).replace(".",",")}
                </p>
                <p className="whitespace-nowrap text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2).replace(".",",")}
                </p>
              </>
            )) || (
                <p className="text-sm font-semibold">
                  R$ {Number(product.basePrice).toFixed(2).replace(".",",")}
                </p>
              )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
