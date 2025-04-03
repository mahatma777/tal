import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/broadcast/Content';
import Getpodcontent from '../sections/broadcast/Getpodcontent';

const pagelocation = "Podcast";

export default function Getpodcasts() {
 
  return (
    
    <Fragment>
    <MetaTags>
        <title>Teachings About Life| {pagelocation}</title>
        <meta
            name="description"
            content="#"
        />
    </MetaTags>
    <Header />
    <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
    <Getpodcontent />
    <footer className="sigma_footer footer-2 sigma_footer-dark">
        <Footer />
    </footer>
</Fragment>
  )
}
