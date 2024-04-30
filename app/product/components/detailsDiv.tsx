import React from 'react';
import { FaStar } from "react-icons/fa";
import PropertyDiv from './propertyDiv';
import AddToCart from './addToCart';
import { incrementProductQuantity } from './actions';

export interface DetailsDivProps {
    product: {
        id: string;
        name: string;
        price: number;
        description: string;
        rating: number;
        made: string;
        sizes: string[];
    }
}

const DetailsDiv: React.FC<DetailsDivProps> = ({ product }) => {
    const { name, price, description, rating, made} = product;
    
    return( 
        <div className='flex justify-center mx-3 md:mx-0'>
            <div className='w-[28rem]'>
                <div className='flex flex-row'>
                    <h1 className='text-xl mb-3'>{name.toUpperCase()}</h1>
                    <div className='flex-1'/>
                    <p className='mr-2 flex flex-row gap-2 mt-1 text-base'>
                        {} 5.0
                        <FaStar className='mt-1'/>
                    </p>
                </div>
                <p className='text-lg'>${price}</p>

                <label className="form-control w-full mt-5 ">
                    <div className="label">
                        <span className="label-text">SIZE</span>
                    </div>
                    <select className="select select-bordered pl-5 ">
                        {product.sizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
    
                </label>

                <AddToCart product={product} incrementProductQuantity={incrementProductQuantity}/>
                
                <span className='pt-4 flex flex-row pb-10 border-b-[1px] border-gray-300'>
                    Produced in <p className='font-bold ml-2'>{made}</p>
                </span>

                <PropertyDiv product={product} />

            </div>
        </div>

    )
}


export default DetailsDiv;
