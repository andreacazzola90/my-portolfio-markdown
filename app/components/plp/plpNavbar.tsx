"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList, faArrowDownShortWide, faArrowDownWideShort, faArrowDownAZ, faArrowDownZA } from '@fortawesome/free-solid-svg-icons'


import { useGeneral } from '../../context/generalcontext';
import Pagination from '../pagination';


export default function PlpNavbar({ page }: { page: number }) {
    const { isCardSide, setCardSide } = useGeneral();
    const { isAlphabeticSort, setAlphabeticSort } = useGeneral();
    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Pagination page={page} ></Pagination>
            </div>
            <div className="flex justify-between gap-2">
                <button className="btn btn-square" onClick={() => setAlphabeticSort(!isAlphabeticSort)}>
                    {isAlphabeticSort ? <FontAwesomeIcon icon={faArrowDownAZ} /> : <FontAwesomeIcon icon={faArrowDownZA} />}
                </button>
                <button className="btn btn-square" onClick={() => setCardSide(!isCardSide)}>
                    {isCardSide ? <FontAwesomeIcon icon={faList} /> : <FontAwesomeIcon icon={faTableCells} />}
                </button>
            </div>
        </div >

    )
}