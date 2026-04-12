import AddToCard from "@/Components/Button/AddtoCard";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    // console.log(data)
    const { thumbnail, images, title, price, category, description, rating, tags, discountPercentage, brand, weight, warrantyInformation, availabilityStatus } = data;

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="w-11/12 lg:w-7/12 mx-auto card lg:card-side bg-[#1f1e1ed5] shadow-sm">
                <figure>
                    <Image src={thumbnail} alt={title} width={2500} height={2500} />
                </figure>
                <div className="card-body">
                    <div className="space-y-1">
                        <h2 className="card-title text-2xl lg:text-4xl">{title}</h2>
                        <div>Category : {category} </div>
                        <div>Brand : {brand ? brand : 'No'} </div>

                    </div>
                    <div>

                        <p className="flex items-center gap-3"><FaStar /> {rating}</p>

                    </div>
                    <div>
                        <p className="text-3xl lg:text-4xl font-bold">${price}</p>
                        <p className="text-lg line-through">${discountPercentage}</p>
                    </div>

                    <div className="space-x-3 ">
                        {
                            tags.map((t, i) => <div key={i} className="badge badge-outline bg-blue-500 text-black">{t}</div>)
                        }
                    </div>
                    <div>
                       <AddToCard data={data} />
                    </div>


                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-10 mx-auto">


                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Rating</td>
                            <td>{rating}</td>

                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>Category</td>
                            <td>{category}</td>

                        </tr>
                        <tr>

                            <td>Brand</td>
                            <td>{brand ? brand : 'None'}</td>

                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>Weight</td>
                            <td>{weight}kg</td>

                        </tr>
                        <tr>

                            <td>Warranty</td>
                            <td>{warrantyInformation}</td>

                        </tr>
                        <tr>

                            <td>Availability</td>
                            <td>{availabilityStatus}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <Link href={'/'}><button className="btn btn-error mt-10">Go Home</button></Link>

            </div>

        </div>
    );
};

export default ProductDetails;