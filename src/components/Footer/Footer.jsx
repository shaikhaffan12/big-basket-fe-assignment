import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { DownloadAppImgUrl } from '../../utils/urls';


export const Footer = () => {
  return (
    <>
    <div>
        <hr style={{
            color: '#000000',
            backgroundColor: '#000000',
            borderColor : '#000000',
            margin: '0%',
            marginBottom: '2%',
            marginTop: '2%',
        }}/>
    </div>


    <div className='d-flex footer container'>
        
        <div>
            <p>© Copyright By MindBowser</p>
        </div>

        

            <div className = "download-app-section">
                <h6>Download Our App</h6>
                    <div className='download-logo-section'>
                        {DownloadAppImgUrl.map(element => {
                            return (
                                <img src={element} key={Math.random()} alt="" className='download-logo'/>
                            )
                        })}
                    </div>
            </div>

            <div className = "social-icons">
                    <h6>Get Social With Us</h6>
                    
                    <div className='social-icon-section'>
                        <a href="www.youtube.com">
                        <FontAwesomeIcon icon={faYoutube} size="2x" style={{backgroundColor: "#ff000"}}/>
                        </a>

                        <a href="www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>

                        <a href="www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>

                        <a href="www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
            </div>
        </div>


   

    </>
  )
}
