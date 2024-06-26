import { CircleX, Loader } from "lucide-react";
import { useState } from "react";
import { Img } from "react-image";

interface ProductImageProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImageProps) => {


  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Img
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          loader={<Loader size={50} />}
          unloader={<CircleX size={50} />}
        />
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (

          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent
            ${imageUrl === currentImage && "border-2 border-primary border-solid"}`}

            onClick={() => handleImageClick(imageUrl)}
          >
            <Img
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              loader={<Loader size={50} />}
              unloader={<CircleX size={50} />}
            />
          </button>

        ))}
      </div>
    </div>
  );
};

export default ProductImages;
