import { View, Text , useEffect, useState} from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from '../../pages/About';
export default function Abouttext() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('https://teachingsaboutlife.com/api/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }


  return (

    <div className="section section-padding pt-0">
    <div className="container">
        <div className="section-title text-center">
            <p className="subtitle">Watch Video</p>
            <h4 className="title">Our Recent Podcasts</h4>
        </div>
        <div className="row sigma_broadcast-video">

            {users.map((item, i) => (
                <div className="col-lg-4 col-sm-6 mb-30" key={i}>
                    <div className="sigma_video-popup-wrap">
                  
                    {/* <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} /> */}
                        <img src={`https://teachingsaboutlife.com/admin/access/pthumbs/${item.podcast_profile}`} alt={item.title} />
                        {/* <a rel={"external"} href={`https://teachingsaboutlife.com/admin/access/podcastfile/${item.mediafile}`} className="sigma_video-popup popup-sm popup-youtube">
                            <i className="fas fa-play" />
                        </a> */}

                        <a rel={"external"} href={`/getpodcasts/${item.id}`} className="sigma_video-popup popup-sm popup-youtube">
                            <i className="fas fa-play" />
                        </a>

                  
                    </div>
                    {/* <Link to={`/getpodcasts/${item.id}`} style={{marginRight: "10px"}}> <h6 className="mb-0 ">{item.podcast_cat} </h6>  </Link> */}
                       

                                        
                      
              
                </div>
            ))}


        </div>
    </div>
</div>
  )
}