"use client"
import CategoryButton from "@/Components/CategoryButton/CategoryButton";
import HomeProductsCards from "@/Components/Ui/homePageCard/HomeProductsCards";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBackward, FaFilter } from "react-icons/fa";


const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let url = activeCategory === 'all' ?
            'https://dummyjson.com/products' :
            `https://dummyjson.com/products/category/${activeCategory}`;

        fetch(url).then(res => res.json()).then(data => setProducts(data.products))
    }, [activeCategory])

  const handleHigh = ()=>{
    const filterHigh = [...products].sort((a,b)=>b.price - a.price)
    setProducts(filterHigh)
  }
  const handleLow = ()=>{
    const filterHigh = [...products].sort((a,b)=>a.price - b.price)
    setProducts(filterHigh)
  }


    return (
        <div className="w-11/12 mx-auto">
            Product
            <CategoryButton
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <div className='border-b-4 border-white '></div>


 <div className="flex justify-between items-center mt-2">
    <div className="">
        <Link href="/" className="px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded-lg">
      <FaBackward /> Back
    </Link>
    </div>
    <div className="dropdown dropdown-end justify-end">
                <div tabIndex={0} role="button" className="btn btn-secondary  flex items-center m-1">Sorted By Price<FaFilter /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={handleHigh}><a>High to low</a></li>
                    <li onClick={handleLow}><a>Low to high</a></li>
                </ul>
            </div>
 </div>




            <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                    products.map(product => <HomeProductsCards key={product.id} product={product} />)
                }
                {/* {
                    products.map(product => <li key={product.id}>
                                    {product.title}
                        </li>)
                } */}
            </div>
        </div>

    );
};

export default ProductsPage;