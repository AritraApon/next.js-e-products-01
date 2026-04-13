import AddToCard from "@/Components/Button/AddtoCard";
import Image from "next/image";
import Link from "next/link";


const HomeProductsCards = ({ product }) => {
    const {id, thumbnail, images, title, price, category } = product
    return (
        <Link href={`/${id}`}>

            <div className="bg-[#2b3247d5] shadow rounded-2xl py-3 px-5 transition-transform duration-300 
                hover:scale-105 hover:shadow-sm hover:shadow-blue-400 cursor-pointer">
                <div className="flex justify-center items-center ">
                    <Image src={thumbnail} alt="gg" width={200} height={200} />
                </div>
                <div className="space-y-3">
                    <h1 className="text-2xl fond-semibold">{title}</h1>
                    <p ><span>Category</span>: <span className="bg-yellow-100  px-2 rounded-3xl fond-semibold text-yellow-800">{category}</span></p>
                </div>
                <div className="flex justify-between my-5">
                    <div>
                        <p className="text-2xl font-bold text-blue-700">${price} </p>
                    </div>
                     <div>
                <button  className="btn btn-warning text-lg font-semibold ">Details</button>
            </div>
                </div>

            </div>
        </Link>

    );
};

export default HomeProductsCards;