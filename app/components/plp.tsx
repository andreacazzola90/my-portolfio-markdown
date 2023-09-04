'use client'
import Pagination from "./pagination"
import PlpNavbar from "./plp/plpNavbar"
import { useGeneral } from "../context/generalcontext"
import ProductPreview from "./plp/productPreview"

export default function Plp({ products, limit = 0, currentPage = 0 }: { products: [Product], limit: number, currentPage: number }) {
    const { isCardSide, isAlphabeticSort } = useGeneral();


    let startFromProduct = currentPage
    startFromProduct = currentPage * limit
    let endProduct = startFromProduct + limit
    let visibleProducts = products.slice(startFromProduct, endProduct)

    if (!isAlphabeticSort) {
        visibleProducts = visibleProducts.reverse()
    }
    return (
        <div className="cmp_plp">
            <PlpNavbar page={currentPage} />
            <div className={`plp grid pb-10  ${isCardSide ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-4'}   gap-12 p-2`}>
                {Object.values(visibleProducts).map((x: any, i: number) => <ProductPreview product={x} key={i}></ProductPreview>)}
            </div>
            <Pagination page={currentPage} ></Pagination>
        </div >

    )
}