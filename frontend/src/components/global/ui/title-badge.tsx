import { CATEGORY_ICON } from "@/constants/category-icon";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

interface TitleBadgeProps extends BadgeProps{
  icon?: keyof typeof CATEGORY_ICON;
}

const TitleBadge = ( {icon, children, className }: TitleBadgeProps) => {
  return (
    <Badge
      className={twMerge(className, "w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase")}
      variant="outline"
    >
      {icon && CATEGORY_ICON[icon as keyof typeof CATEGORY_ICON]}
      {children}
    </Badge>
  );
};

export default TitleBadge;
