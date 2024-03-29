import React from 'react'
import { Helmet } from 'react-helmet-async'

const Facebook = ({ url, name, type, title, desc, image, locale }) => (
  <Helmet>
    {name && <meta property='og:site_name' content={name} />}
    <meta property='og:locale' content={locale} />
    <meta property='og:url' content={url} />
    <meta property='og:type' content={type} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={desc} />
    <meta property='og:image' content={image} />
    <meta property='og:image:alt' content={desc} />
    <meta property='og:image:type' content='image/jpeg' />
  </Helmet>
)

export default Facebook
