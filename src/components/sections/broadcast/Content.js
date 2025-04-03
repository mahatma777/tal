import React, { Component, Fragment } from 'react';
import Block from './Block';
import Blogs from './Blogs';
import Padcastcategory from './padcastcategory';

class Content extends Component {
    render() {
        return (
            <Fragment>
                {/* <Block /> */}
                {/* <Blogs /> */}
                <Padcastcategory/>
            </Fragment>
        );
    }
}

export default Content;