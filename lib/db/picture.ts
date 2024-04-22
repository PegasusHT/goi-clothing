import { PrismaClient, Product } from "@prisma/client";
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