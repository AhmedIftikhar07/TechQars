import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Navbar() {
    const emailAddress = 'umeriftikhar2526@gmail.com';
    
    const logo = "</ TecQasr >"
    return (
        <div>

            <nav className="bg-white fixed top-0 w-full shadow-lg z-50">
                <div className="flex flex-wrap justify-between md:mx-2 max-w-screen-xl ">
                    <a href={'/'} className="flex items-center">
                        <Image src="/logo.png" width={80} height={10} alt="logo"></Image><div className='font-bold text-xl text-cyan-600 hidden md:block'>{logo}</div>
                    </a>
                    <div className=" mt-auto mb-auto">
                        
                        <Link href={`mailto:${emailAddress}`} className=' text-sm font-semibold text-white bg-cyan-600 mx-2  px-2   py-2 rounded-md hover:bg-white hover:text-cyan-600 hover:border-cyan-600 hover:border '>CONTACT</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
