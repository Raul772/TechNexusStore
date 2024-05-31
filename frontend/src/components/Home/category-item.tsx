import { CATEGORY_ICON } from "@/constants/category-icon";
import { Link } from "react-router-dom";
import ICategory from "../global/interfaces/ICategory";
import { Badge } from "../global/ui/badge";

interface CategoryItemProps {
  category: ICategory;
}

const CategoryItem = ({ category }: CategoryItemProps) => {


  return (
    <Link to={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
