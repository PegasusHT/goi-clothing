'use client'
import React from 'react';
import { DetailsDivProps } from './detailsDiv';
import SingleDiv from './singleDiv';

const PropertyDiv: React.FC<DetailsDivProps> = ({ product }) => {
    const [openDiv, setOpenDiv] = React.useState('');
    const handleToggle = (name: string) => {
      setOpenDiv(openDiv === name ? '' : name);
    };
  
    const { description } = product;

    return (
      <div className="mb-12">
        <SingleDiv name='DESCRIPTION' content={description} isOpen={openDiv === 'DESCRIPTION'} onToggle={() => handleToggle('DESCRIPTION')} />
        <SingleDiv name='SIZE & FIT' content="Size & Fit. Model is 175 cm tall and is wearing size XS. Our items have a tiny fit, so if you are in doubt, choose one size up." isOpen={openDiv === 'SIZE & FIT'} onToggle={() => handleToggle('SIZE & FIT')} />
        <SingleDiv name='CARE' content="Clothes don't have to be washed every time you put them on. To take care of our planet, wash clothes only when necessary. It's best to hand wash this item or use a delicate cycle in your washing machine." isOpen={openDiv === 'CARE'} onToggle={() => handleToggle('CARE')} />
        <SingleDiv name="SHIPPING" content='All items are shipped from our warehouse in Spain. Shipping times depend on your location, but normally it takes 2-5 business days (could take more on holiday seasons or product launches). Please bare in mind that if you are outside the EU you will have to pay custom fees.' isOpen={openDiv === 'SHIPPING'} onToggle={() => handleToggle('SHIPPING')} />
        <SingleDiv name='RETURNS' content='We accept returns/exchanges within 20 days from after the reception of your order. Unfortunately, we are not able to offer free returns. For more information about returns or exchanges, please contact us.' isOpen={openDiv === 'RETURNS'} onToggle={() => handleToggle('RETURNS')} />
      </div>
    );
};

export default PropertyDiv;