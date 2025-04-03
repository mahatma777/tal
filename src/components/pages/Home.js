import React, {useState,  Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';
// import axios  from 'axios';

const pagelocation = "Homepage";

export default function Home() {

    // const [name, setName]= useState('');
    // const handleSubmit = async (e)=>{
    //     e.preventDefault();
    //    const response=  await axios.post('https://teachingsaboutlife.com/api/index.php', {name})
    //     console.log(response)
    // }
  
    return (
     

            <Fragment>
                <MetaTags>
                    <title> Teachings About Life  | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
              
                <Header />
                <Content />

                {/* <form onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                   
                    <button>Save</button>
                </form> */}
                <footer className="sigma_footer footer-2 sigma_footer-dark">
                    <Footer />
                </footer>
            </Fragment>

    )

}
