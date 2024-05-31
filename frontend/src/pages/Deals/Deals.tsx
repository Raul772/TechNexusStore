import LoaderPage from "@/components/global/Loader/LoaderPage";
import IProduct from "@/components/global/interfaces/IProduct";
import ProductItem from "@/components/global/ui/product-item";
import TitleBadge from "@/components/global/ui/title-badge";
import { STATUS } from "@/constants/Status";
import { computeProductTotalPrice } from "@/helpers/product";
import axios from "axios";
import { useEffect, useState } from "react";

const DealsPage = () => {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [deals, setDeals] = useState<IProduct[] | undefined>();
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

  if (status === "loading")
    return <LoaderPage />

  return (
    (deals &&
    <div className="p-5">
        <TitleBadge className="my-5" icon="percent">Ofertas</TitleBadge>
      <div className="grid grid-cols-2 gap-8">
        {deals.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
      </div>
    </div>) || <p>Não foi possível obter as ofertas.</p>
  );
}

export default DealsPage;