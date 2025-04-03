import { useEffect, useState } from "react";
import broadcast from "../../../data/broadcast.json";
import { Link } from 'react-router-dom';
import { getRecentPost } from "../../../helper/blogHelper";
import { getAuthor, getTags } from "../../../helper/helper";
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Broadcast() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);


 
    function getUsers() {
        axios.get('https://teachingsaboutlife.com/api/sermondata.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };
  return (
    <div className="section section-padding pt-0">
    <div className="container">
        <div className="section-title text-center">
            <p className="subtitle">Uploaded Sermons</p>
            <h4 className="title">Recent Sermons</h4>
        </div>
        <div className="row sigma_broadcast-video">

        {users.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <article className="sigma_post">
                                    <div className="sigma_post-thumb">
                                        <Link to={"/blog-details/" + item.id}>
                                            <img src={`https://teachingsaboutlife.com/admin/access/sermon_thumbs/${item.file}`} />
                                        </Link>
                                    </div>
                                    <div className="sigma_post-body">
                                        <div className="sigma_post-meta">
                                            <div className="me-3">
                                                <i className="far fa-cross" />
                                                {/* Data */}
                                           
                                                    <Link to={"/blog/tag/" + item.id} className="sigma_post-category" key={i}>{item.sermon_title}</Link>
                                              
                                                {/* Data */}
                                            </div>
                                            <Link to={"/blog-details/" + item.id} className="sigma_post-date"> <i className="far fa-calendar" />{item.upldate}</Link>
                                        </div>
                                        <h5> <Link to={"/blog-details/" + item.id}>{item.title}</Link> </h5>
                                 
                                            <div className="sigma_post-single-author" key={i}>
                                                <img src="https://teachingsaboutlife.com/admin/assets/img/default.gif" alt={item.name} />
                                                <div className="sigma_post-single-author-content">
                                                    By <p>{item.sermon_by}</p>
                                                </div>

                                                
                                            </div>
                                          
                                            <div className="sigma_sermon-box">
                                            <ul className="sigma_sm square">
 
            
 <li >
     <a rel={"external"} >
         <i className="fa fa-music" />
     </a>
     
 </li>
 <li >
     <a rel={"external"} >
         <i className="fab fa-youtube" />
     </a>
     
 </li>
 <li >
     <a rel={"external"} >
         <i className="fa fa-file-pdf" />
     </a>
     
 </li>
 <li >
     <a rel={"external"} >
         <i className="fa fa-share-alt" />
     </a>
     
 </li>




</ul>

</div>
                                         
                                    </div>
                                </article>
                            </div>
                        ))}


        </div>
    </div>
</div>
  )
}