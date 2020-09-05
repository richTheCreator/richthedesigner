import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { Button } from '../../../components'
import useSiteMetadata from '../../../components/SiteMetadata'

import { ProductImg, TextContainer } from './styles'
import { Heading2, Body1 } from '../../../components/Typography'

const Hero = ({
  hero: {
    heading,
    description,
    backgroundImg: { alt, image }
  }
}) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <SectionWrapper
      bg='ivory'
      pl={[0, 0, 0, 6]}
      pr={[0, 0, 0, 6]}
      pt={[0, 0, 0, 6]}
      pb={[0, 0, 0, 6]}
    >
      <SectionMax
        height={['100%', '100%', '400px', '500px']}
        style={{ position: 'relative', maxHeight: '900px' }}
        justifyContent={['center', 'center', 'flex-start', 'flex-start']}
        m='auto!important'
        p={[0, 0, 0, 4]}
      >
        <ProductImg
          fluid={image.childImageSharp.fluid}
          height={['250px', '300px', '100%', '100%']}
          position={[
            'relative',
            'relative',
            'absolute !important',
            'absolute !important'
          ]}
          width={['100%', '100%', '80%', '80%']}
        />
        <TextContainer
          bg={'black'}
          lg={6}
          md={6}
          xs={11}
          p={3}
          pt={[5, 5, '100px!important', '100px!important']}
          pb={[5, 5, '100px!important', '100px!important']}
          mt={['-50px', '-50px', '0px', '0px']}
        >
          <Heading2
            mb={2}
            mt={2}
            textAlign='center'
            color='ivory'
            fontFamily='heading'
          >
            {heading}
          </Heading2>
          <Body1 textAlign='center' color='ivory'>
            {description}
          </Body1>
        </TextContainer>
      </SectionMax>
    </SectionWrapper>
    // <GridParent bg='black' height='70vh' maxHeight='700px'>
    //   <HeroTextContainer m={4} bg={'black'} gridArea={TextGridArea}>
    //     {heading.split(' ').map((text, i) =>
    //       i === 1 ? (
    //         <HeroTextOutline
    //           fontSize={['75px', 12]}
    //           color='transparent'
    //           mt={3}
    //           mb={3}
    //         >
    //           {text}
    //         </HeroTextOutline>
    //       ) : (
    //         <HeroText fontSize={['75px', 12]} mt={3} mb={3} color='white'>
    //           {text}
    //         </HeroText>
    //       )
    //     )}
    //     <Button bg={'ivory'} mt={4} url={menuLinks[0].link}>
    //       VIEW PRODUCTS
    //     </Button>
    //   </HeroTextContainer>
    //   <HeroImage gridArea={ImageGridArea} fluid={image.childImageSharp.fluid} />
    // </GridParent>
  )
}

export { Hero }
