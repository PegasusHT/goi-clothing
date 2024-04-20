import React from 'react';
import Image from "next/image";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
                    </div>
                );
            })}
        </div>
    );
}

export default ProductsList;