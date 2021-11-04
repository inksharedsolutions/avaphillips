import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook1 from '../static/books/misha-and-phoebe.png'
import FrontBook2 from '../static/books/alex-and-kisses.png'
import FrontBook3 from '../static/books/1.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'ava-phillips',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
                 <Helmet title="Books | Ava Phillips"/>
		 		<Nav />
		 		<Banner
                    // spanFirst={`About The`}
                    contextHeading={`Books`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Tales from the Zookeeper's Daughter`,
                                    spanFirst: `The Travels of Misha and Phoebe`,
                                    imgSrc: FrontBook1,
                                    id:'misha-and-phoebe',
                                    content:
                                    `
                                    <p>
                                        This is the first book of the series, Tales from the Zookeeper's Daughter. This is a heartwarming story about a black tarantula spider named Misha who goes in search of her momma.
                                    </p> 
                                    
                                    <p>
                                        On Misha's travels, she meets Phoebe, an albino rabbit, and becomes best friends right away.
                                    </p>

                                    <p>
                                        It shows children how kindness and determination bring people together in times of struggles.
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/tales-from-the-zookeepers-daughter-the-travels-of-misha-and-phoebe/',
                                        barnes: 'https://www.barnesandnoble.com/w/tales-from-the-zookeepers-daughter-ava-phillips/1137309049?ean=9781648950186',
                                        amazon :'https://www.amazon.com/Tales-Zookeepers-Daughter-Ava-Phillips-ebook/dp/B08CK4YZMN/ref=sr_1_1?dchild=1&keywords=9781648950186&qid=1594308599&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Tales-Zookeepers-Daughter-Travels-Phoebe/dp/1643459368/ref=sr_1_1?dchild=1&keywords=9781643459363&qid=1595431784&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/tales-from-the-zookeepers-daughter-ava-phillips/1137318408?ean=9781643459363',
                                        booksamillion:'https://www.booksamillion.com/p/Tales-from-Zookeepers-Daughter/Ava-Phillips/9781643459363?id=8058437897017',
                                    }
                                }} 
                            />

                            <BookInfo
                                data={{
                                    title:`Tales from the Zookeeper's Daughter`,
                                    spanFirst: `Alex and Kisses`,
                                    imgSrc: FrontBook2,
                                    id:'alex-and-kisses',
                                    content:
                                    `
                                    <p>
                                        This is the second book from the series, Tales from the Zookeeper's Daughter. Alex and Kisses are twin baby monkeys that live in a zoo.
                                    </p> 
                                    
                                    <p>
                                        Alex enjoys bullying and playing pranks on his sister Kisses. He doesn't like following the rules of the zoo.
                                    </p>

                                    <p>
                                        So this book shows you what kind of trouble he gets into and how he learns his lesson the hard way.
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/tales-from-the-zookeepers-daughter-alex-and-kisses/',
                                        barnes: 'https://www.barnesandnoble.com/w/tales-from-the-zookeepers-daughter-ava-phillips/1137152736?ean=9781648950438',
                                        amazon :'https://www.amazon.com/Tales-Zookeepers-Daughter-Alex-Kisses-ebook/dp/B089T8W7HC/ref=sr_1_1?dchild=1&keywords=9781648950438&qid=1591742079&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Tales-Zookeepers-Daughter-Alex-Kisses/dp/1648950426/ref=sr_1_1?dchild=1&keywords=9781648950421&qid=1591985050&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/tales-from-the-zookeepers-daughter-ava-phillips/1137152736?ean=9781648950421',
                                        booksamillion:'https://www.booksamillion.com/p/Tales-from-Zookeepers-Daughter/Ava-Phillips/9781648950421?id=8058437897017',
                                    }
                                }} 
                                />

<div className="columns book-container-ft">
                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src= {FrontBook3}/>
                    </div>
                </div>

                <div className="column" >
                    <section className="contentBook">

                        <h1>Tales from the Zookeeper's Daughter</h1>
                        <p className="sub-heading">
                            The Long Journey
                        </p>
                        
                        {/* <span>{props.data.spanTitle}</span> */}

            
                        <div className="content-body">
                             <p>
                                       This book is about struggles and having the courage to face them.
                                    </p> 
                                    
                                    <p>
                                        It teaches children about compassion love, friendships, and family.
                                    </p>

                                    <p>
                                        Ava lives with her husband and five dogs in Lincolnton, North Carolina. She loves writing children's book to teach them about life experiences.
                                    </p>
                                    <p>
                                        God, Family, and  country mean everything to her. She loves helping people anyway she can.
                                    </p>



                        </div>
                    </section>


                    <section className="fullSection">
                        <nav className="booklinkBlocks">
                            <span className ="comingsoon">Coming Soon </span>
                            
                        </nav>

                        
                    </section>
        

                    


                </div>	
            </div>
                        
                                
                            
                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;