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
        mb={4}
        mt={4}
        color='white'
        fontFamily='sans'
        fontSize={['46px', '66px', '96px']}
        fontWeight={500}
        lineHeight='100%'
        style={{
          textTransform: 'uppercase',
          hyphens: 'auto'
        }}
      >
        {company}
      </Heading2>
    </div>
  )
}

export { FeaturedWork }
