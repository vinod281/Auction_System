import React from 'react'
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/Navbar2';
import AuctionCard from '../../components/Cards/AuctionCard';
import SearchBar from '../../components/SearchBar/Searchbar';
import './homePage.css'


export default function HomePage() {
    return (
        <>
        
        <Header/>
        
        <NavBar/>
        <SearchBar/>

        <div className="cardContainer">

        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        
        

        </div>
        

            <div>HomePage</div>
        </>

    )
}
