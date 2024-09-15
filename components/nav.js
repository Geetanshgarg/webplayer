"use client";
import Link from "next/link";
export default function Nav() {
    return ( 
        <div className="w-full fixed h-14 text-white items-center px-6 pt-3 ">
        <nav className="flex mx-auto items-center justify-between">
          <div className="text-2xl font-cuba">OnlinePlayer</div>
          <ul className="list-none flex gap-5 ">
            <li><Link href="#" className="m-2 hover:text-slate-100 ">
            Features
          </Link></li>
          <li><Link href="#" className="m-2 hover:text-slate-100 ">
            Product
          </Link></li>
          <li><Link href="#" className="m-2 hover:text-slate-100">
            About Us
          </Link></li>
          </ul>
          <div className="px-2"><Link href="#" className="m-2 hover:text-slate-100">
            Login
          </Link><Link href="#" className="m-2 text-black rounded-3xl hover:bg-white bg-slate-50 p-3 ">
            Sign Up
          </Link></div>
        </nav>
        {/* <span className="w-full border-t border-gray-300"></span> */}
      </div>
      
    )
  }
  