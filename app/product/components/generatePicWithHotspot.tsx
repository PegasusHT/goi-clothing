import React from "react";
import Image from "next/image";
import { Prisma, Picture } from "@prisma/client";
import { getHotspotIds, getHotspotsCoord, getHotspotProduct } from "../../../lib/db/picture";
import Link from "next/link"; 

interface ImageProps {
  picture: {
    id: string;
    productName: string[];
    url: string; 
    productIDs: string[];
  };
  index: number;
}

interface DotOnImageProps {
  x: number;
  y: number;
  linkedProductId: string;
}

export async function ImageDisplay({ picture, index }: ImageProps) {
  const {id, productName, url, productIDs} = picture;
  const hotspotIds = await getHotspotIds(id);
  let hotspots = [{ x: 0, y: 0, productId: ''}];

  if(hotspotIds.length > 1) { 
    hotspots = await Promise.all(hotspotIds.map(async (hotspotId) => {
      const { x, y } = await getHotspotsCoord(hotspotId);
      const productId = await getHotspotProduct(hotspotId);

      return { x, y, productId };
    }));

    return (
      <div key={id} className={ 'relative w-[30rem] md:w-full' +
         `${index === 0 ? ' md:col-span-2 md:h-[37rem]' : ''}`}>
        <Image
          src={url}
          alt="product image"
          height={index === 0 ? 600 : 600}
          width={index === 0 ? 600 : 600}
          className=""
        />
        {hotspots.map((hotspot) => {
          return <DotOnImage key={index} x={hotspot.x} y={hotspot.y} linkedProductId={hotspot.productId} />;
        })}
      </div>
    );

  }

  return (
    <div key={id} className={ 'relative w-[30rem] md:w-full' +
       `${index === 0 ? ' md:col-span-2 md:h-[37rem]' : ' md:h-auto'}`}>
      <Image
        src={url}
        alt="product image"
        height={index === 0 ? 600 : 600}
        width={index === 0 ? 600 : 600}
        className=""
      />
    
    </div>
  );
};

const DotOnImage: React.FC<DotOnImageProps> = ({ x, y, linkedProductId }) => {
  const xPercent = x / 610 * 100;
  const yPercent = y / 813 * 100;

  return (
    <Link href={`/product/${linkedProductId}`}>
      <div
        style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
        className="absolute w-2 h-2 rounded-full cursor-pointer bg-white border border-black tooltip" 
        data-tip="click to view product"
      ></div>
    </Link>
  );
};

export default ImageDisplay;
