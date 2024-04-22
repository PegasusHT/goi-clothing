import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { getFirstPictureUrl } from "@/lib/db/picture";

interface ProductCardProps {
  product: Product;
}

export default async function ProductCard({ product }: ProductCardProps) {
    const firstPictureUrl = await getFirstPictureUrl(product);

  return (
    <Link
      href={"/product/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <figure>
        <Image
          src={firstPictureUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
\        <p>{product.description}</p>
        <p className="text-primary">${product.price}</p>
      </div>
    </Link>
  );
}