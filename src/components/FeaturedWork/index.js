import React from 'react'
import { StyledFileIcon, Container, ProductImage } from './styles'
import { LinkButton } from '../Button'
import { Heading2 } from '../Typography'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const FeaturedWork = ({
  node: {
    frontmatter: { company }
  },
  idx
}) => {
  let dest
  switch (company) {
    case 'Berkshire':
      dest = '/work/berkshire/empowering-real-estate-agents/'
      break
    case 'Gaugebox':
      dest = '/work/gaugebox/designing-a-startup/'
      break
    case 'Weedmaps':
      dest = '/work/weedmaps/wayfinding/'
      break
    case 'design studio':
      dest = '/work/design-studio/design-agency-life/'
      break
  }
  return (
    <AniLink
      cover
      bg='#fff'
      direction='down'
      to={dest}
      title='featured_home'
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Heading2
        my={[3, 5]}
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
    </AniLink>
  )
}

export { FeaturedWork }
