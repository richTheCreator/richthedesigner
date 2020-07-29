import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO/SEO'
import useSiteMetadata from './SiteMetadata'

// test

const TemplateWrapper = ({ children }) => {
  const { menuLinks } = useSiteMetadata()
  const [key, setKey] = useState(undefined)

  useEffect(() => {
    const checkVerify = localStorage.getItem('age_verified')

    if (!checkVerify) {
      if (confirm('Are you over 21 years old?')) {
        localStorage.setItem('age_verified', true)
      } else {
        console.log('not over 21 years old')
      }
    } else {
      console.log('is_verified')
    }
  }, [])

  return (
    <div>
      <Navbar menuLinks={menuLinks} />
      <div style={{ paddingTop: '119px' }}>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
