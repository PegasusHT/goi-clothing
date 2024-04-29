import { PrismaClient, Product, Picture, Hotspot } from "@prisma/client";
import prisma from "./prisma";

export async function getFirstPictureUrl(product: Product): Promise<string> {
  const firstPictureId = product.pictureIDs[0];
  const firstPicture = await prisma.picture.findUnique({
    where: {
      id: firstPictureId
    }
  });
  return firstPicture?.url || "http://via.placeholder.com/640x360";
}

export async function getHotspotIds(id: string): Promise<string[]> {
  const picture = await prisma.picture.findUnique({
    where: {
      id: id
    }
  });

  return picture?.hotspotIDs || [''];
}

type HotspotCoord = { x: number; y: number };
export async function getHotspotsCoord(hotspotId: string): Promise<HotspotCoord> {
  const hotspot = await prisma.hotspot.findUnique({
    where: {
      id: hotspotId
    }
  });

  const result = {
    x: hotspot?.x ?? 0,
    y: hotspot?.y ?? 0
  };
  
  return result;
}

export async function getHotspotProduct(hotspotId: string): Promise<string> {
  const hotspot = await prisma.hotspot.findUnique({
    where: {
      id: hotspotId
    }
  });

  return hotspot?.productId || '';
}