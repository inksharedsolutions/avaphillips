import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../static/author/author-profile.jpg';

const IndexAuthor = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} alt="author-profiles"/>
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        {/* <p className="italic-tag margin-off">Well done, good and faithful servant</p> */}
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                            I grew up in Shelby North Carolina. I wrote poems as a child.
                            I've always dreamt of being an author. I owe my gift of writing
                            to God he has blessed me so much.<br />
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                Read more
                            </Link>
                        </p>
                        <p className="margin-off auth-name">
                            Ava Phillips
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default IndexAuthor 