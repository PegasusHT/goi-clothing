import React from 'react';
import ImagesDisplay from '../components/imagesDisplay';
import prisma from '../../../lib/db/prisma';

async function ProductDetails( id:string ){
    const product = await prisma.product.findUnique({
        where: {
            id
        },
        include: {
            pictures: true
        }
    });

    if (!product) {
        return <div>Product not found</div>;
    }

    return( 
        <div className='grid grid-cols-2 '> 
            <ImagesDisplay pictures={product.pictures} />
        </div>
    )
}


export default ProductDetails;
