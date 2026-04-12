'use client'
import { ProductsContext } from '@/Contexts/ProductsProvider';

import React, { useContext } from 'react';

const AddToCard = ({product ,data}) => {
    const {addCart , setAddCart} =useContext(ProductsContext)

 const isExists = addCart.find(card=> card.id == data.id)
    const handleAddToCard =(data) =>{

        if(!isExists){
          setAddCart([...addCart,data])
        alert('add to cart')
        }else{
            alert('sorry')
        }

    }
    return (
        <div>
            <div>
                <button onClick={()=>handleAddToCard(data)} className={`btn btn-success text-lg font-semibold ${isExists ? 'btn-warning ':' btn-success'} `}>Add to Cart</button>
            </div>
        </div>
    );
};

export default AddToCard;