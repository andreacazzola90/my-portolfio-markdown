import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGem, faHeart, faSeedling, faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { categories } from '../utils';
import SideMenu from './sideMenu';

async function getData() {
    const res = await fetch(`${process.env.DB_HOST}/collection_listings.json`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function page() {
    const { collection_listings } = await getData()

    return (

        <div className="navbar bg-base-200 text-base-content md:px-24   fixed z-[100] animated">
            <div className="navbar-start">
                <Link href={'/'} className="btn btn-ghost normal-case text-xl">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={50}
                        height={50}
                        priority
                    /></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {collection_listings.map((c: Collection, i: number) =>
                        <li key={i} >
                            <Link href={`/collection/${c.collection_id}`} className=''>
                                <FontAwesomeIcon icon={categories[i].icon} className="" />
                                <span>{c.title}</span>
                            </Link>
                        </li>)}

                </ul>
            </div>


            <div className="navbar-end">

                <SideMenu></SideMenu>


                <div className="md:hidden dropdown dropdown-left dropdown-hover ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-12 z-[1] p-2 shadow bg-base-100 text-base-content rounded-box w-52">
                        {collection_listings.map((c: Collection, i: number) =>
                            <li key={i} >
                                <Link href={`/collection/${c.collection_id}`} className='flex '>
                                    <FontAwesomeIcon icon={categories[i].icon} className="" />
                                    <span>{c.title}</span>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}