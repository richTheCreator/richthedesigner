import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../components/Footer'
import { Button } from '../components'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO/SEO'
import useSiteMetadata from './SiteMetadata'

// test

const TemplateWrapper = ({ children }) => {
  const {
    mdx: {
      frontmatter: { footer }
    }
  } = useStaticQuery(query)

  const { menuLinks } = useSiteMetadata()

  return (
    <div>
      <Navbar menuLinks={menuLinks} />
      <div>{children}</div>
      {/* <Footer footer={footer} /> */}
      {/* <div className='noise'></div> */}
    </div>
  )
}

export default TemplateWrapper

const query = graphql`
  query global {
    mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        footer {
          legal
          blurb
        }
      }
    }
  }
`
