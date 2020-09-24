import React from 'react'
import { StyledFileIcon, Container, ProductImage } from './styles'
import { LinkButton } from '../Button'
import { Heading2 } from '../Typography'

const FeaturedWork = ({
  node: {
    frontmatter: { company }
  },
  idx
}) => {
  return (
    <div>
      <Heading2
        pb={5}
        pt={5}
        fontFamily='sans'
        fontSize={['46px', '66px', '96px']}
        letterSpacing={'0px'}
        fontWeight={700}
        lineHeight='100%'
        style={{
          textTransform: 'uppercase',
          hyphens: 'auto',
          cursor: 'pointer'
        }}
      >
        {company} {'→'}
      </Heading2>
    </div>
  )
}

export { FeaturedWork }
