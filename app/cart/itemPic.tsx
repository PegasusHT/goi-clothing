import { getFirstPictureUrl } from "@/lib/db/picture";
import Image from "next/image";

interface ItemPicProps {
    product: {
        id: string; name: string; description: string; price: number; rating: number; sizes: string[]; made: string; pictureIDs: string[]; categoryIDs: string[]; collectionIDs: string[];
    };
}

export default async function ItemPic({ product }: ItemPicProps) {
    const firstPictureUrl = await getFirstPictureUrl(product);

  return (
    <Image
      src={firstPictureUrl ? firstPictureUrl : "http://via.placeholder.com/640x360"}
      alt={product.name}
      width={200}
      height={200}
      className="rounded-lg"
    />
    );
}

