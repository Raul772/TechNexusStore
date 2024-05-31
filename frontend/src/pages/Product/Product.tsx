import ProductImages from "@/components/Product/product-images";
import ProductInfo from "@/components/Product/product-info";
import IProduct from "@/components/global/interfaces/IProduct";
import ProductList from "@/components/global/ui/product-list";
import SectionTitle from "@/components/global/ui/section-title";
import { computeProductTotalPrice } from "@/helpers/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {

  const { slug } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[] | undefined>(undefined);

  useEffect(() => {

    const fetchProduct = async () => {

      const response = await axios.get(`http://localhost:3000/api/products/${slug}`);

      if (response) {
        setProduct(response.data as IProduct);
      }
    }
    fetchProduct();
  }, []);

  useEffect(() => {

    const fetchRelated = async () => {

      const response = await axios.get(`http://localhost:3000/api/products/related/${product?.categoryId}/${slug}`);

      if (response) {
        setRelatedProducts(response.data as IProduct[]);
      }
    }
    fetchRelated();
  }, [product]);





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
