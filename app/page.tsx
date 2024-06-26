import Image from "next/image";
import Header from "./components/Header/Header";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className='w-full h-screen relative'>
        <div className='absolute inset-0 brightness-[.8] bg-no-repeat bg-[center_top] bg-cover'
          style={{
            backgroundImage: `url(https://goi-ecommerce.s3.us-east-2.amazonaws.com/pictures/bg-main.jpg)`,
          }}
        />
        <Header pos={'home'}/>

        <div className="relative z-[1] flex flex-col justify-center items-center h-full ">
          <h1 className=' text-white text-xl mb-4'>
            NEW ESSENTIALS
          </h1>
          <div className=''>
            <Link href='/essentials'>
              <button className='group transition duration-500 text-white btn-md'>
                SHOP NOW
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </button>
            </Link>
       
          </div>
        </div>
        <div className='relative flex justify-center bottom-40 mb-16 bounce'>
          <IoIosArrowDown className="text-white text-5xl"/>
        </div>

      </div>
    </main>
  );
}
