import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blockbox extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <Link to="/sermons" className="sigma_service border style-1 bg-white">
                                <div className="sigma_service-thumb">
                                    <i className="flaticon-church" />
                                    <span />
                                    <span />
                                </div>
                                <div className="sigma_service-body">
                                    <h5>Sermons</h5>
                                    <p>May the spirit of resilience and faith guide our steps, may the love of Christ fill our hearts, and may we all be a beacon of hope in this world. Amen</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <Link to="/podcast" className="sigma_service border style-1 primary-bg">
                                <div className="sigma_service-thumb">
                                    <i className="text-white fa fa-podcast" />
                                    <span />
                                    <span />
                                </div>
                                <div className="sigma_service-body">
                                    <h5 className="text-white">Podcast</h5>
                                    <p className="text-white">Messages with inspiration from above from seasoned men of God. Join us as we explore the scriptures and learn to live as God Intended </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <Link to="/newsletters" className="sigma_service border style-1 secondary-bg">
                                <div className="sigma_service-thumb">
                                    <i className="custom-primary fa fa-newspaper" />
                                    <span />
                                    <span />
                                </div>
                                <div className="sigma_service-body">
                                    <h5 className="text-white">Newsletter</h5>
                                    <p className="text-white">Dont be left out , enjoy write-ups from our newsletters available to all,  our seasoned men of God have put into writing the voice of Hope for all. </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blockbox;