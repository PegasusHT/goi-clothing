import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { Transition } from '@headlessui/react';

interface SingleDivProps {
    name: string;
    content: string;
    isOpen: boolean;
    onToggle?: () => void;
  }
  
const SingleDiv: React.FC<SingleDivProps> = ({ name, content, isOpen, onToggle }) => {
    return (
        <div className='border-b-[1px] border-gray-300 py-5'>
            <div className='flex flex-row'>
                <div className=''>{name}</div>
                <div className='flex-1' />
                <RiArrowRightSLine
                    className={`text-2xl ${isOpen ? 'rotate-0' : 'rotate-90'} cursor-pointer`}
                    onClick={onToggle}
                />
            </div>
            <Transition
                show={isOpen}
                enter='transition ease-out duration-200'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
            >
                <div className='mt-2 mb-2 pt-2 lg:text-base'>{content}</div>
            </Transition>
        </div>
    );
  };
  
  export default SingleDiv;
