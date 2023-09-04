'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGem, faHeart, faSeedling, faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { categories } from '../utils';
import { useGeneral } from '../context/generalcontext';


export default function SideMenu() {

    const { cart, wishlist } = useGeneral();

    return (
        <>
            <div className="drawer drawer-end flex justify-end">

                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost ">
                    <div className="indicator">
                        <FontAwesomeIcon className="fa-lg" icon={faHeart} />
                        <span className="badge badge-sm badge-primary indicator-item">
                            <span className='absolute'>{wishlist}</span>
                        </span>
                    </div>
                </button>
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn ">
                        <div className="indicator">
                            <FontAwesomeIcon className="fa-lg" icon={faCartShopping} />
                            <span className="badge badge-sm badge-primary indicator-item">
                                <span className='absolute'>{cart.length}</span>
                            </span>
                        </div>
                    </label>
                </div>

                <div className="drawer-side z-20 mt-[60px] lg:mt-[68px]">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {cart.length > 0 ?
                            <div>{cart.map((c: Product, i: number) =>
                                <div className='flex items-center p-4' key={i}>
                                    <Image src={c.image?.src} alt={''} width={100} height={100} className='rounded-xl'></Image>
                                    <h4 className='p-4'>{c.title}</h4>
                                </div>
                            )}</div>
                            :
                            <div>you have not added any products yet</div>
                        }
                    </ul>
                </div>
            </div>
        </>

    )
}