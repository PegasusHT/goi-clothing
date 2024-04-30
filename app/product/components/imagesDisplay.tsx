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
    <div className="slider relative overflow-x-hidden md:grid w-full md:grid-cols-2  md:w-[28rem] mb-2 h-[37rem] md:h-[60rem] scrollbar-hide">
      {pictures.map((picture, index) => (
        <ImageDisplay key={picture.id} picture={picture} index={index} />
      ))}
    </div>
  );
};

export default ImagesDisplay;
