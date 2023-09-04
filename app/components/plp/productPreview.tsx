"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useGeneral } from '../../context/generalcontext';
import Link from 'next/link';
import Image from "next/image"


export default function ProductPreview({ product }: { product: Product }) {
    const { isCardSide, wishlist, addToWishlist } = useGeneral();

    return (

        <div className={`card ${isCardSide && 'card-side'} bg-base-100 shadow-xl transform transition duration-1000 hover:scale-105`} >

            <figure className={`${!isCardSide ? 'aspect-w-16 aspect-h-9' : 'w-1/2'}`}>
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={product?.image?.src!}
                        alt="Vercel Logo"
                        className="w-full h-full object-center object-cover"
                        width={500}
                        height={500}
                        priority
                    />
                </Link>
            </figure>
            <div className="card-body flex justify-between">
                <div className="card-content mb-4">
                    <Link href={`/product/${product.id}`}>
                        <h2 className="card-title">{product.title}</h2>
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: product.body_html! }} />
                </div>
                <div className="card-actions flex justify-between">
                    <div>
                        <button className="btn" onClick={() => addToWishlist(wishlist + 1)}>
                            <FontAwesomeIcon icon={faHeart} className="" />
                        </button>
                    </div>
                    <Link href={`/product/${product.id}`}>
                        <button className="btn btn-outline btn-primary">See more</button>
                    </Link>
                </div>
            </div>

        </div>

    )
}