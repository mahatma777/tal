
import React, { useEffect, useState, Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Posts({ users, loading }) {

    if (loading) {
        return <h2>Loading...</h2>;
      }
    

  return (
    <div className="row p-3">

      {users.slice(0, 6).map((item, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                    <div className="sigma_service style-2">
                        <div className="sigma_service-thumb">
                            <img src={`https://teachingsaboutlife.com/admin/access/article_posts/${item.thumbnail}`} alt={item.title} style={{maxHeight:250}} />
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





</div>
  )
}