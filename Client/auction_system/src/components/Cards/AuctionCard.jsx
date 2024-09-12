import React from 'react'
import './cards.css'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';



export default function AuctionCard() {

    const [slideInterval, setSlideInterval] = useState(null); // Initially no sliding

    const images = [
        { src: 'images/wFWD-12.jpg', alt: 'First Image' },
        { src: 'images/wFWD-10.jpg', alt: 'Second Image' },
        { src: 'images/wFWD-11.jpg', alt: 'Third Image' }
    ];

    // Function to start sliding on hover
    const handleMouseEnter = () => {
        setSlideInterval(2000); // 2 seconds interval for sliding
    };

    // Function to stop sliding when hover ends
    const handleMouseLeave = () => {
        setSlideInterval(null); // Disable auto-sliding
    };

    return (
        <div>

            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <div className="headerContainer">
                        <div className="noticeContainer">
                            <span>BIDDING NOW!</span>
                        </div>
                        <div className="dateContainer">
                            Thursday, August 29, 2024
                        </div>
                    </div>
                </Card.Body>


                <div className="imageContainer">

                    <Carousel
                        interval={slideInterval}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        controls={false} // Hide manual controls (optional)
                    >
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image.src}
                                    alt={image.alt}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* <Card.Img variant="top" src="images/wFWD-12.jpg" height={250} /> */}
                    <div class="overlay-text">
                        Year: 1992<br></br>
                        Make: FWD<br></br>
                        Body Style: Truck with Sander
                    </div>
                </div>



                <Card.Body>
                    <div className="footerContainer">
                        <div className="footerLogoContainer">

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="tomato" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
                            </svg>

                        </div>

                        <div className="footerNotice">
                            <span>1992 FWD Truck with Sander</span>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}
