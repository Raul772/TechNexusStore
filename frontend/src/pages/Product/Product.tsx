import ProductImages from "@/components/Product/product-images";
import ProductInfo from "@/components/Product/product-info";
import LoaderPage from "@/components/global/Loader/LoaderPage";
import IProduct from "@/components/global/interfaces/IProduct";
import ProductList from "@/components/global/ui/product-list";
import SectionTitle from "@/components/global/ui/section-title";
import { STATUS } from "@/constants/Status";
import { computeProductTotalPrice } from "@/helpers/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { slug } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[] | undefined>(undefined);
  const [status, setStatus] = useState<keyof typeof STATUS>("loading");


  useEffect(() => {

    const fetchProduct = async () => {

      const response = await axios.get(`${API_BASE_URL}api/products/${slug}`);

      if (response) {
        setProduct(response.data as IProduct);
        setStatus("loaded");
      }

    }
    fetchProduct();
  }, []);

  useEffect(() => {

    const fetchRelated = async () => {

      const response = await axios.get(`${API_BASE_URL}api/products/related/${product?.categoryId}/${slug}`);

      if (response) {
        setRelatedProducts(response.data as IProduct[]);
      }
    }
    fetchRelated();
  }, [product]);


  if(status === "loading")
    return <LoaderPage />;


  return (
    <div className="flex flex-col gap-8 pb-8">
      {(product && <>
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </>) || <p>Erro ao obter informações do produto.</p>}

      <div>
        <SectionTitle>Relacionados</SectionTitle>
        {(relatedProducts && <>
          <ProductList products={relatedProducts} />
        </>) || <p>Erro ao obter produtos relacionados.</p>}
        
      </div>
    </div>
  )
};
