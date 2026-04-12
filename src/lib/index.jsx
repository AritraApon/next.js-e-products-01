import ProductsProvider from '@/Contexts/ProductsProvider';
import React from 'react';

const Providers = ({children}) => {
    return <ProductsProvider>{children} </ProductsProvider>
};

export default Providers;