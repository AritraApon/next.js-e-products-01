'use client'
import CartsCard from "@/Components/Ui/cartCard/CartsCard";
import { ProductsContext } from "@/Contexts/ProductsProvider";
import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";


const CartPage = () => {
    const { addCart, setAddCart } = useContext(ProductsContext);
   const total = Array.isArray(addCart)
  ? addCart.reduce((acc, item) => acc + item.price , 0)
  : 0;

    const handelProceed = () => {
        setAddCart('')
        toast.success('Successfully Proceed to Checkout')
    }
    return (
        <div className="w-10/12 mt-10 mx-auto space-y-5">
            <div className="space-y-5">
                {addCart.length === 0 ? <div className="bg-gray-100 text-gray-600 p-4 rounded-md text-center">
                    <div className="flex justify-center">
                        <p className="text-6xl text-center"><MdRemoveShoppingCart /></p>
                    </div>
                    <p className="text-xl"> Your cart is empty — start shopping now</p>
                </div>
                    :
                    addCart.map(addProduct => <CartsCard key={addProduct.id} addProduct={addProduct} setAddCart={setAddCart} addCart={addCart} />)

                }
                {
                    addCart.length > 0 && (
                        <div className="space-y-3">
                            <h2 className="text-xl font-semibold">
                                Total: ${total.toFixed(2)}
                            </h2>

                            <button onClick={handelProceed} className="btn btn-success w-full">
                                Proceed to Checkout
                            </button>
                        </div>
                    )
                }

            </div>


        </div >
    );
};

export default CartPage;