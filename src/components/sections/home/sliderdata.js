import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
export default function Donation() {

    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="section section-padding pt-0">
    <div className="container">
        <div className="section-title text-center">
            <p className="subtitle">Articles</p>
            <h4 className="title">Recent Articles </h4>
        </div>
        <div className="row">
            {/* Data */}
             <Slider {...settings}>
            {donationblock.slice(0, 6).map((item, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                    <div className="sigma_service style-2">
                        <div className="sigma_service-thumb">
                            <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                        </div>
                        <div className="sigma_service-body">
                            <h5>
                                <Link to="/donation">{item.title}</Link>
                            </h5>
                            <p>{item.shorttext}</p>
                            <div className="sigma_service-progress">
                                {/* <div className="progress-content">
                                    <p>Raised: ${new Intl.NumberFormat().format(item.raised)}</p>
                                    <p>Goal: ${new Intl.NumberFormat().format(item.goal)}</p>
                                </div> */}
                                <div className="sigma_progress">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width:  100  + "%" }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
              
            ))}

</Slider>
            {/* Data */}
        </div>
    </div>
</div>
  )
}