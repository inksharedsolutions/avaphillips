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
                            <img src={FrontBook} alt="featured-book"/>
                        </div>

                    </div>

                    <div className='reviews-content'>
                        <hr />	

                        <blockquote>
                            <h3>
                                Toby Berry
                                <br/>
                                <span>
                                    There are a lot of dangers out there...
                                </span>
                            </h3>
                            <br/>
                            This remarkable children's story comes across as a blend of classic tales like <i>Charlotte's Web</i> and &nbsp;
                            <i>Are you My Mother</i> but focused on modern thematic concerns. Misha and Phoebe are a tarantula and a 
                            bunny who are looking for Misha's mother. Their tale is partially about habitat without ever using the 
                            word. Misha finds herself in Wyoming, freezing and miserable thanks to modern man and the accidental 
                            transport of species...
                            <a 
                                href='https://www.theusreview.com/reviews-1/Tales-from-the-Zookeepers-Daughter-The-Travels-of-Misha-and-Phoebe-by-Ava-Phillips.html#.Yck-XmhByUm'
                                target='_blank'
                                rel='noopener noreferrer'>Read More</a>
                        </blockquote>

                        <hr />	
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook