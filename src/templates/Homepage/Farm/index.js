import React from 'react'
import { GridParent, FourCol, TwelveCol } from '../../../components/Containers'
import { Button } from '../../../components'
import useSiteMetadata from '../../../components/SiteMetadata'
import {
  FarmImage,
  FarmImageGridArea,
  TitleBot,
  TitleBotGridArea,
  TitleTop,
  TitleTopGridArea,
  Description,
  DescriptionGridArea,
  ImageContainer,
  ImageContainerGridArea
} from './styles'
import { Body1 } from '../../../components/Typography'

const Farm = ({
  farm: {
    heading,
    description,
    backgroundImg: { alt, image }
  }
}) => {
  const formattedDescription = description
    .split(`\n\n`)
    .map((paragraph) => `${paragraph.replace(/\n/g, `<br> <br>`)}`)
    .join(``)

  return (
    <GridParent
      pl={[3, 4, 5, 6]}
      pr={[3, 4, 5, 6]}
      pt={[5, 6]}
      pb={[5, 6]}
      bg='black'
      gridTemplateColumns={[FourCol, FourCol, FourCol, TwelveCol]}
    >
      <ImageContainer gridArea={ImageContainerGridArea}>
        <GridParent
          height='100%'
          gridTemplateColumns={[FourCol, FourCol, FourCol, TwelveCol]}
        >
          <TitleTop color='ivory' gridArea={TitleTopGridArea}>
            {heading.split(' ')[0]}
          </TitleTop>
          <FarmImage
            gridArea={FarmImageGridArea}
            fluid={image.childImageSharp.fluid}
            height={['350px', '350px', '500px']}
          />
          <TitleBot color='ivory' textAlign='right' gridArea={TitleBotGridArea}>
            {heading.split(heading.split(' ')[0])[1]}
          </TitleBot>
        </GridParent>
      </ImageContainer>
      <Description m={[0, 4]} mt={0} gridArea={DescriptionGridArea}>
        <Body1
          color='ivory'
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></Body1>
      </Description>
    </GridParent>
  )
}

export { Farm }
