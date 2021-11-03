import React from "react"
import { Helmet } from "react-helmet"

//components
import Layout from "../components/layout"
import Navigation from '../components/nav';
import Banner from '../components/banner';
import Book from '../components/index-book';
import Author from '../components/index-author';
import FeaturedLogos from '../components/mid-main';

const IndexPage = (props) => (
  <Layout>
    <Helmet title="Home | Ava Phillips"/>
    <Navigation />
    <Banner />
    <Book />
    <FeaturedLogos />
    <Author />
  </Layout>
)

export default IndexPage
