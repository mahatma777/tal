import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/broadcast/Content';
import Getpodplay from '../sections/broadcast/Getpodplay';

const pagelocation = "Podcast";

export default function Podplay() {
 
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
    <Getpodplay />
    <footer className="sigma_footer footer-2 sigma_footer-dark">
        <Footer />
    </footer>
</Fragment>
  )
}
