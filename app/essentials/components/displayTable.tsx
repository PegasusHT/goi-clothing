import React from 'react';
import { IoFilter } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import ProductsList from './productsList';

export const DisplayTable: React.FC = ({  }) => {

    return (
        <div className=''>
           <div className='border-[0.6px] border-black h-12 flex flex-row text-xs mt-2'>
                <button className='w-32 flex flex-row justify-center items-center gap-3 '>
                    <p> FILTER </p>
                    <IoFilter />
                </button>

                <button className='w-32 border-black border-x-[0.6px] flex flex-row justify-center items-center gap-3'>
                    <p>FEATURED</p> 
                    <p className= 'text-sm'>
                        <MdOutlineSort />
                    </p>
                </button>   
           </div>

              <ProductsList />
        </div>
    )
}

export default DisplayTable;