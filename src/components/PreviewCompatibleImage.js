import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { zIndex, height, position, width, space } from 'styled-system'
import styled from 'styled-components'

const StyledImg = styled(Img)`
  ${width}
  ${space}
  ${position}
  ${height}
  ${zIndex}
`

export const WrappedImg = (props) => <StyledImg {...props} />

const PreviewCompatibleImage = (props) => {
  const { alt = '', childImageSharp, image } = props.imageInfo

  const imageType = props.isFixed ? 'fixed' : 'fluid'
  if (!!image && !!image.childImageSharp) {
    return (
      <WrappedImg
        {...props}
        fixed={props.isFixed ? image.childImageSharp[`${imageType}`] : null}
        fluid={!props.isFixed ? image.childImageSharp[`${imageType}`] : null}
        alt={alt}
      />
    )
  }

  if (childImageSharp) {
    return (
      <WrappedImg
        fixed={props.isFixed ? childImageSharp[`${imageType}`] : null}
        fluid={!props.isFixed ? childImageSharp[`${imageType}`] : null}
        {...props}
        alt={alt}
      />
    )
  }

  if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
}

export default PreviewCompatibleImage
