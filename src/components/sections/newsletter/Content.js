import React, { useEffect, useState, Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import sermonblock from '../../../data/sermon/sermon.json';
import { getFilteredItems } from '../../../helper/sermonHelper';
import { getAuthor } from '../../../helper/helper';
import Pagination from './Pagination';
import Posts from './Posts';
import Brands from '../../layouts/Brands';
import axios from 'axios'




export default function Content() {

  
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [users, setNewsletter] = useState([]);
    useEffect(() => {
        getNewsletter();
    }, []);
 
    function getNewsletter() {
        setLoading(true);
        axios.get('https://teachingsaboutlife.com/api/article.php').then(function(response) {
            console.log(response.data);
            setNewsletter(response.data);
            setLoading(false);
        });
    }
 

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    
        
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  
  return (
<>

<Posts users={currentPosts} loading={loading} />

<Pagination
 postsPerPage={postsPerPage}
 totalPosts={users.length}
 paginate={paginate}
/>
</>


  )
}