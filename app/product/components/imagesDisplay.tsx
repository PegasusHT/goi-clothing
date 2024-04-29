import React from "react";
import ImageDisplay from "./generatePicWithHotspot";
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
    <div className="grid grid-cols-2 w-[28rem] mb-2 h-[60rem] overflow-auto scrollbar-hide">
      {pictures.map((picture, index) => (
        <ImageDisplay key={picture.id} picture={picture} index={index} />
      ))}
    </div>
  );
};

export default ImagesDisplay;
