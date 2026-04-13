'use client'
import React, { useEffect, useState } from 'react';


const CategoryButton =  ({setActiveCategory ,activeCategory}) => {
      const [category , setCategory] = useState([]);
      useEffect(()=>{
        fetch('https://dummyjson.com/products/category-list')
        .then(res=> res.json())
        .then(data=>setCategory(data))
      },[])


    // const res = await fetch('https://dummyjson.com/products/category-list')
    // const category = await res.json()

    return (
        <div className="flex flex-wrap gap-3 p-5 items-center justify-center">
         <div className='hidden lg:flex  flex-wrap gap-3 p-5 justify-center'>
               <button onClick={()=>setActiveCategory('all')} className={ ` ${activeCategory==='all' ? ' bg-blue-600' : 'bg-gray-500'} px-4 py-2  text-white rounded-lg capitalize`}>
                All
            </button>
             {
              category.map((cat ,index)=>  <button onClick={()=>setActiveCategory(cat)} key={index} className={ ` ${activeCategory=== cat ? ' bg-blue-600' : 'bg-gray-500'} px-4 py-2  text-white rounded-lg capitalize`}>
               {cat.replace("-", " ")}
             </button>
            )}

         </div>
            <div className="drawer flex lg:hidden">

                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1" className="btn btn-info drawer-button">Filter Product</label>
                </div>
                <div className="drawer-side mt-10">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-50 p-4">
                        {/* Sidebar content here */}
                          <li>   <button onClick={()=>setActiveCategory('all')} className={ ` ${activeCategory==='all' ? ' border border-blue-600' : ''} px-4 py-2  text-white rounded-lg capitalize`}>
                All
            </button></li>
                         {
              category.map((cat ,index)=><li key={index}><button onClick={()=>setActiveCategory(cat)} key={index} className={ ` ${activeCategory=== cat ? ' border border-blue-600' : ''} px-4 py-2  text-white rounded-lg capitalize`}>
               {cat.replace("-", " ")}
             </button></li>
            )}

                    </ul>
                </div>

            </div>



            {/* {
              category.map((cat ,index)=><SidebarBtn key={index} cat={cat} />
            )} */}


        </div>
    );
};

export default CategoryButton;