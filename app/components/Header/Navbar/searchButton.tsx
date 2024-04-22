'use client';
import { redirect } from "next/navigation";
import React, { useState } from 'react';

async function searchProducts(formData: FormData) {
  
    const searchQuery = formData.get("searchQuery")?.toString();
  
    if (searchQuery) {
      redirect("/search?query=" + searchQuery);
    }
}


export default function SearchButton() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    return (
        <div className="">
              {isSearchVisible && (
                  <form action={searchProducts} className="fixed inset-0 z-50 flex items-center justify-center w-full h-20 bg-white ">
                  <div className="form-control flex flex-row text-black w-full ">
                    <button className="btn btn-ghost btn-circle ml-5" onClick={()=>searchProducts}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <input
                      name="searchQuery"
                      placeholder="Search ... "
                      className=" input w-3/4 min-w-3/4 text-lg"
                    />
                    <button className="btn btn-ghost btn-circle mr-14" onClick={() => setIsSearchVisible(!isSearchVisible)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                  </div>
                </form>
                )}

            <button className="btn btn-ghost btn-circle" onClick={() => setIsSearchVisible(!isSearchVisible)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

     
        </div>
    );
}
