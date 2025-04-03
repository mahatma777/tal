import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export default function Donation() {

  const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);


 
    function getUsers() {
        axios.get('https://teachingsaboutlife.com/api/article.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

  return (
    <div className="section section-padding pt-0">
    <div className="container">
        <div className="section-title text-center">
            <p className="subtitle">Articles</p>
            <h4 className="title">Recent Articles </h4>
        </div>
        <div className="row">
            {/* Data */}
            {/* {users.slice(0, 6).map((item, i) => ( */}
            {users.slice(0, 6).map((item, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                    <div className="sigma_service style-2">
                        <div className="sigma_service-thumb">
                            <img src={`https://teachingsaboutlife.com/admin/access/article_posts/${item.thumbnail}`} alt={item.title} style={{maxHeight:220}} />
                        </div>
                        <div className="sigma_service-body">
                            <h5>
                                <Link to={`/article-details/${item.id}`}>{item.title}</Link>
                            </h5>
                            <p>{item.shorttext}</p>
                            <div className="sigma_service-progress">
                                <div className="progress-content">
                                    <p>Date: {item.dateadded}</p>
                                    {/* <p>Goal: ${new Intl.NumberFormat().format(item.goal)}</p> */}
                                </div>
                                {/* <button></button> */}
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


            {/* Data */}
        </div>
    </div>
</div>
  )
}