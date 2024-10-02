import { useState } from 'react';
import React from 'react';
import './home.css';
import HeroHeader from '../../components/hero-header/HeroHeader'
import Pagination from '../../components/pagination/Pagination';
import Services from '../../components/services/Services';
import TourList from '../../components/tours/TourList';
import SortInput from '../../components/sort-input/SortInput';
import Banner from '../../components/banner/Banner';
import NewsLetter from '../../components/news-letter/NewsLetter';
import { toursList } from '../../data';
import { paginate } from '../../utils/pagination';

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortItem, setSortItem] = useState("recomended")

    // const TOUR_PER_PAGE = 6;
    // const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);
    // const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
    // const finishIndex = currentPage * TOUR_PER_PAGE;
    
    // Sort Tours
    const sortedTourList = 
    sortItem === "low"
    ? toursList.sort((a,b) => a.priceFrom - b.priceFrom)
    : sortItem === "high" ? toursList.sort((a,b) => b.priceFrom - a.priceFrom)
    : toursList.sort((a,b) => b.rating - a.rating);

    // const orderdTourList = sortedTourList.slice(startIndex, finishIndex); 
    const {pages, orderdTourList} = paginate(toursList.length, sortedTourList, currentPage);
    return (
        <div>
            <HeroHeader />
            <Services />
            <SortInput 
            setSortItem={setSortItem}
            sortItem={sortItem}
            toursLength={toursList.length}
            />
            <TourList toursList={orderdTourList}/>
            <Pagination 
            pages={pages} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            />
            <Banner/>
            <NewsLetter />
        </div>

    )
}
