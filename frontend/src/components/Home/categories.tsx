import { Key, useEffect, useState } from "react";
import ICategory from "../global/interfaces/ICategory";
import axios from "axios";
import CategoryItem from "./category-item";

const Categories = () => {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:3000/api/products/categories');

      if(response)
        setCategories(response.data as ICategory[]);
    }
    fetchCategories();
  })


  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id as Key} category={category} />
      ))}
    </div>
  );
};

export default Categories;
