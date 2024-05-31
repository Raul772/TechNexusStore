import IProduct from "@/components/global/interfaces/IProduct";
import ProductItem from "@/components/global/ui/product-item";
import TitleBadge from "@/components/global/ui/title-badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Category(){


  const { slug } = useParams();
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined);

  useEffect(() => {
    const fetchCategoryProducts = async () => {

      const response = await axios.get(`http://localhost:3000/api/products/categories/${slug}`);

      if (response) {
        setProducts(response.data as IProduct[]);
      }
    }
    fetchCategoryProducts();
  }, [])



  return (
    products && <>
      <div className="flex flex-col gap-8 p-5">
        <TitleBadge icon={slug as keyof typeof CATEGORY_ICON}>
          {slug}
        </TitleBadge>
      </div>

      <div className="grid grid-cols-2 gap-8 p-5">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </>
  )
};
