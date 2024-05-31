
import { Loader } from "lucide-react";
import { Img } from "react-image";

interface ImageProps {
  height?: number;
  width?: number;
  sizes?: string;
  src: string;
  alt: string;
}

const PromoBanner = (props: ImageProps, className?: string) => {
  return (
    <Img {...props} className={className} loader={<Loader size={50} />} unloader={<span>Error loading image</span>} />
  );
};

export default PromoBanner;
