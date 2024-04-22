'use client';
import { useState, useTransition } from "react";    

interface AddToCartProps {
    product: {
        id: string;
        name: string;
        price: number;
    },
    incrementProductQuantity: (productId: string) => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ product, incrementProductQuantity }) => {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return (
        <div className=' group'>
            <button className='border-[1px] mt-5 w-full border-black hover:bg-gray-200 py-2 rounded'
                onClick={()=>{
                    setSuccess(false);
                    startTransition(async () => {
                        await incrementProductQuantity(product.id);
                        setSuccess(true);
                    })
                }}
            >
                ADD TO CART
                <span className='ml-4 text-lg opacity-50 group-hover:opacity-100'>•</span>
                <span className='ml-4'>
                    ${product.price}
                </span>
            </button>

            {isPending && <span className="loading loading-spinnermd"/>}
            {!isPending && success && <p className='text-success'>Added to cart!</p>}
        </div>
    )
}

export default AddToCart;