import React from 'react'
import { Body1, Heading4, Body2, Subtitle1 } from '../../components/Typography'
import { Flex } from 'reflexbox/styled-components'
import styled from 'styled-components'
import { space, height, width, opacity, minHeight } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const BGImage = styled(BackgroundImage)`
  ${space}
  ${height}
  ${width}
  ${opacity}
  ${minHeight}
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  z-index: 6;
`
export const CaseStudy = ({
  study: {
    node: {
      fields: { slug },
      frontmatter: {
        title,
        cover_image,
        project: { blurb, focus }
      }
    }
  }
}) => {
  return (
    <AniLink
      cover
      bg='#fff'
      direction='down'
      to={slug}
      title='featured_home'
      style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
    >
      <Flex width='100%' height='100%' flexDirection='column' mb={4}>
        <Flex
          width='100%'
          flexWrap='wrap'
          flexDirection='row'
          justifyContent={'space-between'}
          py={4}
          css={`
            border-top: 3px solid ${({ theme }) => theme.colors.text};
          `}
        >
          <Flex width={[1, 1 / 2, 1 / 3]} flexDirection='column' px={2}>
            <BGImage
              fluid={cover_image.childImageSharp.fluid}
              height={'250px'}
              mb={[4, 0]}
            />
          </Flex>
          <Flex width={[1, 1 / 2, 1 / 4]} mb={4} flexDirection='column' px={2}>
            <Heading4
              style={{
                hyphens: 'auto',
                textTransform: 'uppercase'
              }}
            >
              {title}
            </Heading4>
            <Body2 style={{ textTransform: 'uppercase' }} pt={2}>
              {' '}
              {focus}{' '}
            </Body2>
          </Flex>
          <Flex width={[1, 1 / 2, 1 / 3]} flexDirection='column' px={2}>
            <Subtitle1>{blurb}</Subtitle1>
          </Flex>
        </Flex>
      </Flex>
    </AniLink>
  )
}
