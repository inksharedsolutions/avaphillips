import React from 'react'
import {Link} from 'gatsby';
import FrontBook from '../static/books/misha-and-phoebe.png';

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                {/* <div className="wrapper">
                    <div className="title">
                        <div className="rect"></div>
                        <h1>Featured Book</h1>
                    </div>
                </div> */}

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="content-wraps">

                            {/* <span className="italic-tag">Read, listen, and learn in various formats</span> */}

                            <h1>Tales from the Zookeeper's Daughter</h1>
                            <span>The Travel of Misha and Phoebe</span>
                            <p>
                                This is the first book of the series, Tales from the Zookeeper's Daughter.
                                This is a heartwarming story about a black tarantula spider named Misha
                                who goes in search of her momma.
                            </p>
                            <button><Link to="/about-the-book">Read More</Link></button>
                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook