import Categories from "@/components/Home/categories";
import PromoBanner from "@/components/Home/promo-banner";
import LoaderPage from "@/components/global/Loader/LoaderPage";
import IProduct from "@/components/global/interfaces/IProduct";
import ProductList from "@/components/global/ui/product-list";
import SectionTitle from "@/components/global/ui/section-title";
import { STATUS } from "@/constants/Status";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [deals, setDeals] = useState<IProduct[]>([]);
  const [keyboards, setKeyboards] = useState<IProduct[]>([]);
  const [mouses, setMouses] = useState<IProduct[]>([]);
  const [status, setStatus] = useState<keyof typeof STATUS>("loading");



  useEffect(() => {
    const fetchDeals = async () => {
      const response = await axios.get(`${API_BASE_URL}api/products/deals`);

      if (response) {
        setDeals(response.data as IProduct[]);
        setStatus("loaded");
      }
    }
    fetchDeals();
  }, []);

  useEffect(() => {
    const fetchKeyboards = async () => {
      const response = await axios.get(`${API_BASE_URL}api/products/categories/keyboards`);

      if (response) {
        setKeyboards(response.data as IProduct[]);
        setStatus("loaded");
      }
    }
    fetchKeyboards();
  }, []);

  useEffect(() => {
    const fecthMouses = async () => {
      const response = await axios.get(`${API_BASE_URL}api/products/categories/mouses`);

      if (response) {
        setMouses(response.data as IProduct[]);
        setStatus("loaded");
      }
    }
    fecthMouses();
  }, []);

  if (status === "loading")
    return <LoaderPage />;

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="px-5 w-full">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês!"
          className="mx-auto xl:max-w-2xl"
        />
      </div>

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="px-5 w-full">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
          className="mx-auto lg:max-w-2xl"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div className="px-5 w-full">
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses!"
          className="mx-auto lg:max-w-2xl"
        />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  )
};
