import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <>
            <div className='headerContainer'>
                
                        <Col>
                            <div className='auctionLogo'>
                                <img src="images/ai_logo.jpg" alt="" />
                            </div>
                        </Col>

                        <Col>
                            <div className='mainbanner'>
                                <img src="images/66d9c10852c6a.img.png" alt="" className='mainBannerImg' />
                            </div>
                        </Col>

                        <Col><div className='headerText'>
                            <p className='textContact'>Questions? Problem? Help?<br/>
                                Bidding support is available M-F from 9 AM-5PM EST.<br/>
                                Contact us or call (800) 536-1401 x131.
                            </p>
                            <p className='noticeText'>
                                For customer service after 5PM EST and Saturdays<br/>
                                10AM-5PM call 800-536-1401 option 1 from the menu.
                            </p>
                        </div>
                        </Col>
                    










            </div>


        </>

    )
}
