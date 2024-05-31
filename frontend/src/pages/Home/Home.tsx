import Categories from "@/components/Home/categories";
import PromoBanner from "@/components/Home/promo-banner";
import IProduct from "@/components/global/interfaces/IProduct";
import ProductList from "@/components/global/ui/product-list";
import SectionTitle from "@/components/global/ui/section-title";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home(){


  const [deals, setDeals] = useState<IProduct[]>([]);
  const [keyboards, setKeyboards] = useState<IProduct[]>([]);
  const [mouses, setMouses] = useState<IProduct[]>([]);
  


  useEffect(() => {
    const fetchDeals = async () => {
      const response = await axios.get('http://localhost:3000/api/products/deals');

      if(response){
        setDeals(response.data as IProduct[]);
      }
    }
    fetchDeals();
  }, []);
  
  useEffect(() => {
    const fetchKeyboards = async () => {
      const response = await axios.get('http://localhost:3000/api/products/categories/keyboards');

      if(response){
        setKeyboards(response.data as IProduct[]);
      }
    }
    fetchKeyboards();
  }, []);

  useEffect(() => {
    const fecthMouses = async () => {
      const response = await axios.get('http://localhost:3000/api/products/categories/mouses');

      if(response){
        setMouses(response.data as IProduct[]);
      }
    }
    fecthMouses();
  }, []);
  

    return (
      <div className="flex flex-col gap-8 py-8">
        <div className="px-5">
          <PromoBanner
            src="/banner-home-01.png"
            alt="Até 55% de desconto esse mês!"
          />
        </div>
  
        <div className="px-5">
          <Categories />
        </div>
  
        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>
  
        <div className="px-5">
          <PromoBanner
            src="/banner-home-02.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>
  
        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>
  
        <div className="px-5">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>
  
        <div>
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
  )
};
