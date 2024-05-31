
import { CircleX, Loader } from "lucide-react";
import { Img } from "react-image";

interface ImageProps {
  height?: number;
  width?: number;
  sizes?: string;
  src: string;
  alt: string;
  className?: string;
}

const PromoBanner = (props: ImageProps) => {
  return (
    <Img {...props} loader={<Loader size={50} />} unloader={<span><CircleX size={15} />Error loading image</span>} />
  );
};

export default PromoBanner;
