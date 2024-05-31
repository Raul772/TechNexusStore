import CategoryItem from "@/components/Home/category-item";
import ICategory from "@/components/global/interfaces/ICategory";
import { Badge } from "@/components/global/ui/badge";
import axios from "axios";
import { LayoutGrid } from "lucide-react";
import { Key, useEffect, useState } from "react";

export default function Catalog(){

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(`${API_BASE_URL}api/products/categories`);

      if(response)
        setCategories(response.data as ICategory[]);
    }
    fetchCategories();
  },[])


  return (
    <div className="min-h-screen flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <LayoutGrid size={16} fill="#fff" />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id as Key} category={category} />
        ))}
      </div>
    </div>
  );
};

