import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

//components
import Layout from "../components/layout"
import Navigation from '../components/nav';
import Banner from '../components/banner';
import Book from '../components/index-book';
import Author from '../components/index-author';
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <Helmet title="Home | Ava Phillips"/>
    <Navigation />
    <Banner />
    <Book />
    <Author />
  </Layout>
)

export default IndexPage
