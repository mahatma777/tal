import React, { useEffect, useState, Component } from 'react';
import {useParams, Link } from 'react-router-dom';
import { getRecentPost } from "../../../helper/blogHelper";
import { getAuthor, getTags } from "../../../helper/helper";
import axios from 'axios'

export default function Videoplay() {

            const [usersdata, setUsers] = useState([]);
            const {id} = useParams();
            useEffect(() => {
                getUsers();
            }, []);
         
            function getUsers() {
                axios.get(`https://teachingsaboutlife.com/api/podplay.php/${id}`).then(function(response) {
                    console.log(response.data);
                    setUsers(response.data);
                });
            }
  return (
    <div className="section section-padding pt-0">
    <div className="container">
    { usersdata.map((item, i) => (
        <div className="section-title text-center">

            <p className="subtitle">{item.pod_cat}</p>
         
            <h4 className="title"> {item.podname} </h4>


        </div>
                    ))}
        <div className="row">
            { usersdata.map((item, i) => (
                <div className="col-lg-12 col-md-12" key={i}>
                    <article className="sigma_post">
                        <div className="sigma_post-thumb">

                        <iframe src={`${item.mediafile}`} width="100%" height="480"></iframe>
   
                        </div>
                        <div className="sigma_post-body">

                            <div className="sigma_post-meta">
                                <div className="me-3">
                                    {/* <i className="far fa-music" /> */}
                                    {/* Data */}
                                 
                                        {/* <Link to={"/blog/tag/" + item.podname} className="sigma_post-category" >{item.description}</Link> */}
                             
                                    {/* Data */}
                                </div>
                                 {/* <Link to=""   className="sigma_post-date"> <i className="far fa-calendar" />{item.pdate}</Link> */}
                               
                            </div>
                           
                            {/* <h5>   <Link to="#">{item.podname}</Link> </h5> */}
                            {/* <h5> <Link to={"/blog-details/" + item.id}>{item.podname}</Link> </h5> */}
                         
                               
                          
                        </div>

                        
                    </article>
                </div>
            ))}
            {/* Article End */}
        </div>
    </div>
</div>

  );
}