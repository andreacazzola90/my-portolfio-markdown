'use client'
import Link from 'next/link';

export default function Pagination({ page }: { page: number }) {

    let increment = page
    increment++
    let decrement = page
    decrement--
    let currentPage: number = page
    currentPage = +page + 1

    return (
        <>
            <div className="pagination">
                <div className="join flex justify-center">
                    <Link href={`?currentPage=${decrement}`} ><button disabled={page == 0} className={`join-item btn `}>«</button></Link>
                    <button className="join-item btn">{currentPage}</button>
                    <Link href={`?currentPage=${increment}`}><button className="join-item btn">»</button></Link>
                </div>
            </div >
        </>
    )
}