import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/author-profile.jpg'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
                 <Helmet title="Author | Ava Phillips"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    {/* <p>I Am amidst you now</p>
                                    <p>My miracles to perform</p>
                                    <p>I Am not dead</p>
                                    <p>I Am alive and I Am yours to behold</p> */}
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                I grew up in Shelby North Carolina. I wrote poems as a child.
                                I've always dreamt of being an author. I owe my gift of writing
                                to God he has blessed me so much. God family and country come first at me.
                                I write books to teach children life lessons. In a fun way that brings a
                                smile to their faces.
                            </p>

                            <blockquote style={{color: 'lightgray'}}>              
                                <i><q>The book is about family, friendship and how love and kindness can help you in times of struggles.</q></i>
                            </blockquote>
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Ava Phillips</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;