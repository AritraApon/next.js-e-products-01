'use client'
import React, { createContext, useState } from 'react';

export const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
   const [addCart , setAddCart] = useState([]);
   const data ={
     addCart , setAddCart
   }

    return    <ProductsContext.Provider value={data} >{children}</ProductsContext.Provider>
    ;
};

export default ProductsProvider;