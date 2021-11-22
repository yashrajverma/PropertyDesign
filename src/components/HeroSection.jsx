import React, { useEffect } from 'react'
import HomeIllustration from '../img/house illustration.svg'
import Testimonial from '../img/company.svg'
import rating from '../img/Star.svg'
import Buyer from '../img/buyer.png'
import Seller from '../img/seller.png'
import Renter from '../img/rental.png'
import arrow from '../img/arrow.svg'
import { data } from '../propertyData'
import PropertyCard from './PropertyCard'
import number_card from '../img/number_card.png'
import home_illus from '../img/home_illustration.png'
import social from '../img/social.png'


const HeroSection = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    const method = () => {
        const $card = document.querySelector('.head_img');
        let bounds;

        function rotateToMouse(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            }
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            $card.style.transform = `
    scale3d(1, 1, 1)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 3}deg
    )
  `;

            //             $card.querySelector('.glow').style.backgroundImage = `
            //     radial-gradient(
            //       circle at
            //       ${center.x * 2 + bounds.width / 2}px
            //       ${center.y * 2 + bounds.height / 2}px,
            //       #ffffff55,
            //       #0000000f
            //     )
            //   `;
        }

        $card.addEventListener('mouseenter', () => {
            bounds = $card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        });

        $card.addEventListener('mouseleave', () => {
            document.removeEventListener('mousemove', rotateToMouse);
            $card.style.transform = '';
            $card.style.background = '';
        });
    }
    useEffect(() => {
        method()
    }, [])
    return (
        <>
            <header>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
                        <div className="head_text">
                            <p className="text-secondary">Welcome to Digital Yashraj</p>
                            <h1 className="main_text">Discover a place</h1>
                            <h1 className="main_text"> you'll love to live.</h1>
                            <p className="text-secondary below_text">Get the best real estate deals first,
                                before they hit the mass market! HOT FORECLOSURE DEALS with one simple search</p>
                            <button className="head_btn">More About Us.</button>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 mx-auto">
                        <img src={HomeIllustration} alt="House" className="head_img" />
                    </div>
                </div>
            </header>
            <div className="container-fluid bg-white pt-5 pb-5">
                <div className="upper d-flex align-items-center justify-content-between ">
                    <div>
                        <h2 className="upper_text">Yashraj.</h2>
                        <p className="text-secondary">More than 45,000+ companies trust besnik</p>
                    </div>

                    <div>
                        <img src={rating} alt="5 star Rating" className="ratings" />
                        <p className="text-secondary">5 Star Ratings (2k+ Review)</p>
                    </div>
                </div>
                <div className="lower mt-5 ">
                    <img src={Testimonial} alt="Testimonials" className="testimonials" />
                </div>
            </div>
            <div className="guildlines py-5">
                <p style={{ width: "3%", margin: "0 auto", backgroundColor: "#000336", height: "5px", borderRadius: "15px" }} />
                <h2 className="guildlines_h1 text-center mb-5"> How it works ?</h2>
                <p className="text-center text-secondary mb-5"> Everything you need to know when you're looking to buy,
                    <br /> rent, or sell - all in one place.</p>


                <div className="row my-5 text-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
                        <img src={Buyer} alt="Buyer" />
                        <h5 className="guildlines_text">Buyer Guildes</h5>
                        <button className="guildlines_btn">How to buy<img src={arrow} alt="" /> </button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
                        <img src={Renter} alt="Renter" />
                        <h5 className="guildlines_text">Renter Guildes</h5>
                        <button className="guildlines_btn">How to Rent <img src={arrow} alt="" /></button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
                        <img src={Seller} alt="Seller" />
                        <h5 className="guildlines_text">Seller Guildes</h5>
                        <button className="guildlines_btn">How to Sell <img src={arrow} alt="" /></button>
                    </div>
                </div><div className="guildline_btn_btm ">Sell Full Guidelines</div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center my-5">
                    <div>
                        <h1 className="featured_text">
                            Featured Properties
                        </h1>
                        <p className="text-secondary">
                            Everything you need to know when you're looking
                        </p>
                    </div>
                    <button className="guildlines_btn">
                        View all Properties <img src={arrow} alt="" />
                    </button>

                </div>
                <div className="propertyMap">
                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    <PropertyCard
                                        key={index}
                                        beds={item.beds}
                                        image={item.image}
                                        lunch={item.lunch}
                                        area={item.area}
                                        price={item.price}
                                        propertyAddress={item.propertyAddress} /> </>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className="d-flex flex-column justify-content-center align-items-between bg-white">
                    <div className="row my-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-auto">
                            <img src={number_card} alt="" className="img-responsive img-fluid" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mx-auto my-auto">
                            <p style={{ width: "10%", backgroundColor: "#000336", height: "5px", borderRadius: "15px" }} />

                            <h1 className="number_right_text_head">
                                You’ve found a neighborhood you love.
                            </h1>
                            <p className="number_right_text_p text-secondary">When you own a home, you’re committing to living in one location for a while. In a recent Trulia survey, we found that five out of six respondents said finding the right neighborhood </p>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
                            <h1 className=" number">2,500</h1>
                            <p>Homes For Sale</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                            <h1 className=" number">5000+</h1>
                            <p>Homes Recently Sold</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                            <h1 className=" number">170+</h1>
                            <p>Price Reduced</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid bg-white main_container">
                <div className="back_card">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
                            <h1 className="featured">
                                Featured Properties
                            </h1>
                            <p className="text-secondary">Everything you need to know when you're looking</p>
                            <button className="btn_featured text-center">
                                Get Started Now
                            </button>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 mx-auto">
                            <img src={home_illus} alt="connect with us in a min" className="home_illus" />
                        </div>
                    </div>
                </div>

            </div>
            <footer className="container-fluid bg-white py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-3 col-md-3 col-sm-12 mx-auto">
                            <ul style={{ listStyle: "none" }}>
                                <h4 className="my-4 ">Products.</h4>
                                <li className="text-secondary my-2">Listing.</li>
                                <li className="text-secondary my-2">Property.</li>
                                <li className="text-secondary my-2">Agents.</li>
                                <li className="text-secondary my-2">Blogs.</li>

                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mx-auto">
                            <ul style={{ listStyle: "none" }}>
                                <h4 className="my-4 ">Resources.</h4>
                                <li className="text-secondary my-2">Listing.</li>
                                <li className="text-secondary my-2">Property.</li>
                                <li className="text-secondary my-2">Agents.</li>
                                <li className="text-secondary my-2">Blogs.</li>

                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mx-auto">
                            <ul style={{ listStyle: "none" }}>
                                <h4 className="my-4 ">Company.</h4>
                                <li className="text-secondary my-2">Listing.</li>
                                <li className="text-secondary my-2">Property.</li>
                                <li className="text-secondary my-2">Agents.</li>
                                <li className="text-secondary my-2">Blogs.</li>

                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mx-auto">
                            <h4 className="my-4  ">Get In Touch.</h4>
                            <p className="my-4  text-secondary">
                                You will Find Your Next Home,In Any Style You Want.
                            </p>
                            <div>
                                <img src={social} alt="social"
                                    className="img-responsive img-fluid" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h3 style={{ fontWeight: "700" }} className="my-5">Yashraj.</h3>
                        <p className="my-5 text-secondary">
                            Copyright 2020.com, All rights reserved.
                        </p>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default HeroSection
