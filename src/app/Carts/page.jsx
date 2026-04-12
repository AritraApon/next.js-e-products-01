'use client'
import { ProductsContext } from "@/Contexts/ProductsProvider";
import { useContext } from "react";


const CartPage = () => {
        const {addCart , } = useContext(ProductsContext)
    return (
        <div>
         {
            addCart.map(addProduct => <div key={addProduct.id}>{addProduct.title}</div>)
         }
        </div>
    );
};

export default CartPage;