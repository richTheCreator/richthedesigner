import React from 'react'
import HTMLContent from '../../../components/Content'

const Description = ({ content, contentComponent, blogImages }) => {
  return <HTMLContent blogImages={blogImages} content={content} />
}

export { Description }
