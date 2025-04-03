import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getFilteredPosts } from '../../../helper/blogHelper';
import { getAuthor, getTags } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from "react-js-pagination";


export default function Content(props) {
    const [state, setUsers] = useState({ data: getPosts(),
        activePage: 1,
        itemPerpage: 4, });

 const [data, setState]= useState([]);

    function getPosts() {
        var cat = props.catId ? props.catId : '';
        var tag = props.tagId ? props.tagId : '';
        var author = props.authorId ? props.authorId : '';
        var searchQuery = props.query ? props.query : '';
        var filteredItems = getFilteredPosts(blogpost, { cat, tag, author, searchQuery });
        return filteredItems;
    }

   function handlePageChange(pageNumber) {
        setState({ activePage: pageNumber });
    }
        const paginationData = state.data.slice((state.activePage - 1) * state.itemPerpage, state.activePage * state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-md-6">
                <article className="sigma_post">
                    <div className="sigma_post-thumb">
                        <Link to={"/blog-details/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                        </Link>
                    </div>
                    <div className="sigma_post-body">
                        <div className="sigma_post-meta">
                            <div className="me-3">
                                <i className="far fa-cross" />
                                {/* Data */}
                                {getTags(item.tags).slice(0, 2).map((tag, i) => (
                                    <Link to={"/blog/tag/" + tag.id} className="sigma_post-category" key={i}>{tag.title}</Link>
                                ))}
                                {/* Data */}
                            </div>
                            <Link to={"/blog-details/" + item.id} className="sigma_post-date"> <i className="far fa-calendar" />{item.postdate}</Link>
                        </div>
                        <h5> <Link to={"/blog-details/" + item.id}>{item.title}</Link> </h5>
                        {getAuthor(item.author).map((author, i) => (
                            <div className="sigma_post-single-author" key={i}>
                                <img src={process.env.PUBLIC_URL + "/" + author.image} alt={author.name} />
                                <div className="sigma_post-single-author-content">
                                    By <p>{author.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        });
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                {/* Article Start */}
                                {paginationData}
                                {/* Article End */}
                            </div>
                            {/* Pagination Start */}
                            <Pagination
                                activePage={state.activePage}
                                itemsCountPerPage={state.itemPerpage}
                                totalItemsCount={state.data.length}
                                pageRangeDisplayed={state.data.length}
                                onChange={handlePageChange.bind()}
                                innerClass="pagination mb-0"
                                activeClass="active"
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                            {/* Pagination End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    
}