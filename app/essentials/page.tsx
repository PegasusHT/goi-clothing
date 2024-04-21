import React from 'react';
import Header from '../components/Header/Header';
import DisplayTable from './components/displayTable';

type Props = {
    orders: any
};

export const Orders: React.FC<Props> = ({  }) => {

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

export default Orders;