import React from "react";
import Image from "next/image";
import { Prisma, Picture } from "@prisma/client";

interface ImageDisplayProps {
    pictures: {
        id: string;
        productName: string[];
        url: string; 
        productIDs: string[]
    }[]
}

export const ImagesDisplay: React.FC<ImageDisplayProps> = ({ pictures }) => {
  return (
    <div className="grid grid-cols-4 h-1/2 grid-flow-row gap-1 mt-1 text-sm cursor-pointer">
      {pictures.map((picture) => (
        <div key={picture.id} className="relative">
          <Image
            src={picture.url}
            alt="product image"
            height={400}
            width={400}
            className="mb-2"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesDisplay;