import React from 'react'
import './LandingPage.css';


// import all the component and make this components a higher order component
import Filter from '../../components/Filter/Filter';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Offers from '../../components/Offers/Offers';
import BankOffers from '../../components/Bank Offers/BankOffers';
import Cards from '../../components/Products card/Cards';
import { Footer } from '../../components/Footer/Footer';

 const LandingPage = () => {
    
  return (
    <>
    <div className = "filter-div">
            <Filter />
         </div>

    <div >
      <ImageSlider />
    </div>

    <div>
      <Offers />
    </div>

    <div>
      <BankOffers />
    </div>

    <div>
      <Cards  />
    </div>

    <div>
      <Footer />
    </div>
    </>
  )
}

export default LandingPage;

