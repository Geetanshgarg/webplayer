"use client";
import Link from "next/link";
import "./style.css"
export default function Nav() {
    return ( 
        <div className="w-full fixed h-14 text-white items-center px-6 pt-3 ">
        <nav className="flex mx-auto items-center justify-between">
          <div className=" logo text-2xl font-recoleta">OnlinePlayer</div>
          <ul className="list-none flex gap-5 ">
            <li><Link href="#" className="m-2 hover:text-slate-200 ">
            Features
          </Link></li>
          <li><Link href="#" className="m-2 hover:text-slate-200 ">
            Product
          </Link></li>
          <li><Link href="#" className="m-2 hover:text-slate-200">
            About Us
          </Link></li>
          </ul>
          <div className="px-2"><Link href="#" className="m-2 hover:text-slate-200">
            Login
          </Link><Link href="#" className="m-2 text-black rounded-3xl bg-white hover:bg-slate-200 p-3 ">
            Sign Up
          </Link></div>
        </nav>
      </div>
      
    )
  }
  