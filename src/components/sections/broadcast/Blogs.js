import React, { useEffect, useState, Component } from 'react';
import {useParams, Link } from 'react-router-dom';
import { getRecentPost } from "../../../helper/blogHelper";
import { getAuthor, getTags } from "../../../helper/helper";
import axios from 'axios'

export default function Blogs() {

            const [usersdata, setUsers] = useState([]);
            const {id} = useParams();
            useEffect(() => {
                getUsers();
            }, []);
         
            function getUsers() {
                axios.get(`https://teachingsaboutlife.com/api/getpodcast.php/${id}`).then(function(response) {
                    console.log(response.data);
                    setUsers(response.data);
                });
            }
  return (
    <div className="section section-padding pt-0">
    <div className="container">
        <div className="section-title text-center">
            <p className="subtitle">Podcasts</p>
            
            <h4 className="title">All Podcasts </h4>
        </div>
        <div className="row">
            { usersdata.map((item, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                    <article className="sigma_post">
                        <div className="sigma_post-thumb">

                        {/* <iframe src={`${item.mediafile}`} width="370" height="240"></iframe> */}
   <img src={`https://teachingsaboutlife.com/admin/access/pthumbs/${item.podprofile}`} width="370" height="240"/>
                        </div>
                        <div className="sigma_post-body">
                        <Link to={"/blog/tag/" + item.pod_cat} className="sigma_post-category" ><strong>{item.pod_cat}</strong> </Link>
                            <div className="sigma_post-meta">
                                <div className="me-3">
                                    <i className="far fa-cross" />
                                    {/* Data */}
                                 
                                        <Link to={"/blog/tag/" + item.podname} className="sigma_post-category" >{item.description}</Link>
                             
                                    {/* Data */}
                                </div>
                                 <Link to=""   className="sigma_post-date"> <i className="far fa-calendar" />{item.pdate}</Link>
                               
                            </div>
                           
                            <h5>   <Link to="#">{item.podname}</Link> </h5>
                            {/* <h5> <Link to={"/blog-details/" + item.id}>{item.podname}</Link> </h5> */}
                         
                                <div className="sigma_post-single-author" key={i}>
                                    <img src="https://teachingsaboutlife.com/admin/assets/img/default.gif" alt={item.author} />
                                         <div className="sigma_post-single-author-content">
                                      By <p>{item.author}</p>
                                    </div>
                                </div>
                                <div className="sigma_sermon-box">
                                <ul className="sigma_sm square">
 
            
 <li >
     <a rel={"external"}  href={`/podplayaudio/${item.id}`}>
         <i className="fa fa-music" />
     </a>
     
 </li>
 <li >
     <a rel={"external"}   href={`/podplay/${item.id}`}>
     
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
            {/* Article End */}
        </div>
    </div>
</div>

  );
}