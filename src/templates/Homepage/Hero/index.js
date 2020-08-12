import React from 'react'
import { GridParent } from '../../../components/Containers'
import { Button } from '../../../components'
import useSiteMetadata from '../../../components/SiteMetadata'
import {
  HeroImage,
  HeroText,
  HeroTextOutline,
  HeroTextContainer,
  TextGridArea,
  ImageGridArea
} from './styles'

export const Hero = ({
  hero: {
    heading,
    backgroundImg: { alt, image }
  }
}) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <GridParent bg='black' height='70vh'>
      <HeroTextContainer m={4} bg={'black'} gridArea={TextGridArea}>
        {heading.split(' ').map((text, i) =>
          i === 1 ? (
            <HeroTextOutline color='transparent' mt={3} mb={3}>
              {text}
            </HeroTextOutline>
          ) : (
            <HeroText mt={3} mb={3} color='white'>
              {text}
            </HeroText>
          )
        )}
        <Button bg={'ivory'} mt={4} url={menuLinks[0].link}>
          VIEW PRODUCTS
        </Button>
      </HeroTextContainer>
      <HeroImage gridArea={ImageGridArea} fluid={image.childImageSharp.fluid} />
    </GridParent>
  )
}
