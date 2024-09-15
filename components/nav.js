import Image from "next/image";
import Link from "next/link";
export default function Nav() {
    return (
        
        <nav className="bg-transparent fixed flex h-14 text-black items-center justify-evenly px-4">
        <div className="flex-1 flex  justify-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className="flex gap-5">
          <Link href="#" className="m-2 hover:text-blue-600">
            Home
          </Link>
          <Link href="#" className="m-2 hover:text-blue-600">
            login
          </Link>
        </div> 
      </nav>
    )
  }
  