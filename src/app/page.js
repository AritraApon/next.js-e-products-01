import Banner from "@/Components/hero banner/Banner";
import HomeProductsCards from "@/Components/Ui/homePageCard/HomeProductsCards";
import Image from "next/image";

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  // console.log(data.products)
  const products = data.products
  return (
   <>
     <div>
      <Banner/>
      <div>
        <h1 className="font-bold text-4xl md:text-6xl text-center my-10">Products</h1>
      </div>
     <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
      {
        products.map(product=><HomeProductsCards key={product.id} product={product} />)
      }
     </div>
     </div>
   </>
  );
}
