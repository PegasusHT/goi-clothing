import React from 'react';
import Image from "next/image";
import prisma from '../../../lib/db/prisma';
import Link from 'next/link';

export async function ProductsList() {
    const products = await prisma.product.findMany();
    const productsWithPictures = await Promise.all(products.map(async product => {
        const firstPicture = await prisma.picture.findUnique({
            where: {
                id: product.pictureIDs[0]
            }
        });
        return {
            ...product,
            firstPictureUrl: firstPicture?.url
        };
    }));

    return (
        <div className='grid grid-cols-4 h-1/2 grid-flow-row gap-1 mt-1 text-sm cursor-pointer'>
            {productsWithPictures.map((product) => {
                const { id, name, price, firstPictureUrl } = product;
                return (
                    <div key={id} className='relative'>
                        <Link href={`/product/${id}`}>
                            {firstPictureUrl && (
                                <Image
                                    src={firstPictureUrl}
                                    alt={name}
                                    height={400}
                                    width={400}
                                    className='mb-2'
                                />
                            )}
                            <p className='ml-2'>{name.toUpperCase()}</p>
                            <p className='ml-2 mb-2 text-xs'>${price}</p>
                        </Link>
                        
                    </div>
                );
            })}
        </div>
    );
}

export default ProductsList;