import React from 'react';
import './BankOffers.css';
import { BankOffersImage } from '../../utils/urls';

const BankOffers = () => {
  return (
    // hr tag line
    <div className="container">
        <h2 id = "bank-title">Bank Offers</h2>
        <hr  style={{
            color: '#000000',
            backgroundColor: '#000000',
            borderColor : '#000000',
            margin: '0%',
            marginBottom: '2%'
        }}/>

        {/* Map function for rendering images of bank offers */}
        <div className='bank-image-div'>
        {BankOffersImage.map(element => {
            return (
                <img src={element} alt="" key={Math.random()} className = "bank-image" />
                
            )
        })}
        </div>

        {/* hr line after bank images */}
        <h2 id = "bank-title">All Products</h2>
        <hr  style={{
            color: '#000000',
            backgroundColor: '#000000',
            borderColor : '#000000',
            margin: '0%',
            marginBottom: '2%'
        }}/>
    </div>
  )
}

export default BankOffers;