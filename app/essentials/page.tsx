import React from 'react';
import Header from '../components/Header/Header';
import DisplayTable from './components/displayTable';

type IndexSignature = {
    [key: string]: () => JSX.Element;
  };
  


export const Orders = () => {

    return (
        <div className=''>
            <Header pos={'essentials'}/>
            <div className='px-3 bg-white pt-14'>
                <h1 className='text-2xl flex justify-center items-center'>
                    ESSENTIALS
                </h1>

                <DisplayTable />
            </div>
        </div>
    )
}
  // Now you can use Orders in an object of type IndexSignature
  const components: IndexSignature = {
    Orders: Orders,
  };
  
export default Orders;