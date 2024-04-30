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
            <div className='flex flex-col md:flex-row justify-center mt-6 md:gap-20 '> 
                <ImagesDisplay pictures={pictures} />
                
                <DetailsDiv product={product} />
            </div>
        </div>
    )
}


export default ProductDetails;
