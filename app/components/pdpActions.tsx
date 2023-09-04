'use client'
import { useGeneral } from "../context/generalcontext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

export default function PdpActions({ product }: { product: Product }) {
    const { cart, addToCart, wishlist, addToWishlist } = useGeneral();

    return (
        <>
            <div className="card-actions flex ">
                {product.status == 'active' ?
                    <button onClick={() => addToCart([...cart,product])} className={`btn btn-outline btn-primary w-[200px]`} >Add to Cart</button>
                    :
                    <div className="alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Product is out of stock</span>
                    </div>
                }
                <button className="btn" onClick={() => addToWishlist(wishlist + 1)} >
                    <FontAwesomeIcon icon={faHeart} className="" />
                </button>
            </div>
        </>

    )
}