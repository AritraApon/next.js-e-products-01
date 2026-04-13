import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const CartsCard = ({setAddCart,addProduct ,addCart}) => {
    const { thumbnail, images, title, price, category, description, rating, tags, discountPercentage, brand, weight, warrantyInformation, availabilityStatus } = addProduct;

const handleDelete = (addProduct)=> {
    const filterCart = addCart.filter(cart=> cart.id != addProduct.id )
    setAddCart(filterCart)
    toast.error('Delete item')
}

    return (
        <div className=' bg-[#1f1e1ed5]  flex flex-col md:flex-row justify-between items-center py-3 px-3 shadow-xl rounded-2xl'>
            <div className='flex items-center'>
                <Image src={thumbnail} alt={title} width={100} height={100} />
                <div>
                    <h1 className='text-xl lg:text-3xl font-bold'>{title}</h1>
                    <p className='text-2xl font-bold'>${price}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleDelete(addProduct)} className='btn btn-error'>Delete</button>
            </div>

        </div>
    );
};

export default CartsCard;