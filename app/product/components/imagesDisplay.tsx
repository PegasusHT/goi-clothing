import React from "react";
import Image from "next/image";
import { Prisma, Picture } from "@prisma/client";

interface ImageDisplayProps {
  pictures: {
    id: string;
    productName: string[];
    url: string; 
    productIDs: string[];
  }[];
}

export const ImagesDisplay: React.FC<ImageDisplayProps> = ({ pictures }) => {
  return (
    <div className="grid grid-cols-2 mb-2 h-[60rem] overflow-auto scrollbar-hide">
      {pictures.map((picture, index) => (
        <div key={picture.id} className={` ${index === 0 ? 'col-span-2 h-[45rem]' : ''}`}>
          <Image
            src={picture.url}
            alt="product image"
            height={index === 0 ? 600 : 400}
            width={index === 0 ? 600 : 400}
            className=""
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesDisplay;
