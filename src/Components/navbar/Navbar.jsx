"use client"
import { ProductsContext } from "@/Contexts/ProductsProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {
       const {addCart } =useContext(ProductsContext)
    const pathName = usePathname()
    const navLink = <>
        <li className={` ${pathName === '/' ? 'border-b-2 border-blue-500' : ''}   `}>
            <Link href={'/'}>Home</Link>
        </li>
        <li className={` ${pathName === '/Products' ? 'border-b-2 border-blue-500' : ''}   `}>
            <Link href={'/Products'}>Products</Link>
        </li>
        <li className={` ${pathName === '/About' ? 'border-b-2 border-blue-500' : ''}   `}>
            <Link href={'/About'}>About</Link>
        </li>
        <li className={` ${pathName === '/Contacts' ? 'border-b-2 border-blue-500' : ''}   `}>
            <Link href={'/Contacts'}>Contacts</Link>
        </li>

    </>
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Next Js Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link href={'/Carts'}>
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary">{addCart.length ? addCart.length :'0'}</span>
                            <button className="btn btn-primary text-xl"><FaCartShopping /></button>
                        </div>
                    </Link>

                    <a className="btn btn-warning text-xl"><FaRegUserCircle /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;