import React from 'react';
import ImagesDisplay from '../components/imagesDisplay';
import prisma from '../../../lib/db/prisma';
import Header from '@/app/components/Header/Header';
import DetailsDiv from '../components/detailsDiv';  

async function ProductDetails({ params: { id } }: { params: { id: string } }) {
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

    const {pictures, name, price, description, rating, made} = product;
    
    return( 
        <div>
            <Header pos={'product'}/>
            <div className='grid grid-cols-2 mt-6 mx-2 '> 
                <ImagesDisplay pictures={pictures} />
                
                <DetailsDiv product={product} />
            </div>
        </div>
    )
}


export default ProductDetails;
