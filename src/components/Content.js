import React from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import * as Typography from '../components/Typography'
import { Flex, Box } from 'reflexbox/styled-components'
import {
  SectionWrapper,
  SectionMax,
  ThemeSection
} from '../components/Containers'
import { BGImage } from '../components/Images'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const components = {
  ...Typography,
  Flex,
  Box,
  SectionWrapper,
  SectionMax,
  ThemeSection,
  BGImage,
  PreviewCompatibleImage
}

export const HTMLContent = ({ content, className, blogImages }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer blogImages={blogImages}>{content}</MDXRenderer>
    </MDXProvider>
  )
}

export default HTMLContent
