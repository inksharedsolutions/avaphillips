import React from 'react';
import {Link} from 'gatsby';
// import  ImgBanner from '../../static/banner/banner.jpeg';

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="wrapper banner-text">
                                <h1>
                                    Tales from the Zookeeper's Daughter
                                </h1>
                                <p>The book is about family, friendship and how love and kindness can help you in times of struggles.</p>
                            </div>
                            <br />
                            <button><Link to="/about-the-book">Read More</Link></button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;