import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sermonblock from '../../../data/sermon/sermon.json';
import { getFilteredItems } from '../../../helper/sermonHelper';
import { getAuthor } from '../../../helper/helper';
import Pagination from "react-js-pagination";
import Brands from '../../layouts/Brands';

import axios from 'axios'
export default function Content() {

          const [sermons, setSermons] = useState([]);
                useEffect(() => {
                    getSermons();
                }, []);
             
                function getSermons() {
                    axios.get('https://teachingsaboutlife.com/api/sermondata.php').then(function(response) {
                        console.log(response.data);
                        setSermons(response.data);
                    });
                }
  return (


    
//     <div className="row p-3">
//     {sermons.map((item, i) => (
//           <div className="col-sm-4">
//         <div className="card" >
//   {/* <img class="card-img-top" src=".../100px180/" alt="Card image cap"> */}
//   <video width="" height="" controls >
//         <source src={`https://teachingsaboutlife.com/admin/access/sermonrecords/${item.file}`} type="video/mp4"/>
//         </video>
//   <div className="card-body">
//   <span className="subtitle">Sermon Title</span>
//     <h5 className="card-title">{item.sermon_title}</h5>
//     <p className="card-text">{item.writeup}.</p>
   
//     <a href="#" className="btn">    <i className="far fa-calendar-check" /> {item.upldate}</a>
//   </div>
// </div>
// </div>
//     ))}
//     </div>
<div className="row p-5">
    {sermons.map((item, i) => (
<div className="col-lg-6">
<div className="sigma_sermon-box">
    <div className="sigma_sermon-image">
        <img style={{height:300}} src="https://teachingsaboutlife.com/admin/assets/img/sx.jpg" alt={item.title} />
    </div>
    <div className="sigma_box">
        <span className="subtitle">Latest Sermons</span>
        <h4 className="title mb-0">
            <Link to={"/sermon-details/" }>{item.sermon_title}</Link>
        </h4>
        <ul className="sigma_sermon-info mb-0">

                <li key={i}>
                    <i className="far fa-user" />
                    Message From
                    <Link to={"/sermon/author/" + item.id} className="ms-2"><u>{item.sermon_by}</u></Link>
                </li>
    
            <li className="mt-0 ms-4">
                <i className="far fa-calendar-check" />
                {item.upldate}
            </li>
        </ul>
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
</div>

   ))}

</div>

  ); }

  
 