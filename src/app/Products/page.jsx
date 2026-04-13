"use client"
import CategoryButton from "@/Components/CategoryButton/CategoryButton";
import HomeProductsCards from "@/Components/Ui/homePageCard/HomeProductsCards";
import { useEffect, useState } from "react";


const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let url = activeCategory === 'all' ?
            'https://dummyjson.com/products' :
            `https://dummyjson.com/products/category/${activeCategory}`;

        fetch(url).then(res => res.json()).then(data => setProducts(data.products))
    }, [activeCategory])



    return (
        <div className="w-11/12 mx-auto">
            Product
            <CategoryButton
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <div className='border-b-4 border-white '></div>
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