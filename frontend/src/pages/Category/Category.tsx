import LoaderPage from "@/components/global/Loader/LoaderPage";
import IProduct from "@/components/global/interfaces/IProduct";
import ProductItem from "@/components/global/ui/product-item";
import TitleBadge from "@/components/global/ui/title-badge";
import { STATUS } from "@/constants/Status";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Category() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { slug } = useParams();
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined);
  const [status, setStatus] = useState<keyof typeof STATUS>("loading");


  useEffect(() => {
    const fetchCategoryProducts = async () => {

      const response = await axios.get(`${API_BASE_URL}api/products/categories/${slug}`);

      if (response) {
        setProducts(response.data as IProduct[]);
        setStatus("loaded");
      }
    }
    fetchCategoryProducts();
  }, [])


  if (status === "loading")
    return <LoaderPage />


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
