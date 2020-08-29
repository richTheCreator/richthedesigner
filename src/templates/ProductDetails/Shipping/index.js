import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import BackgroundImage from 'gatsby-background-image'
import { Heading6 } from '../../../components/Typography'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { HeroContainer } from './styles'

const Shipping = ({ title }) => {
  const {
    markdownRemark: {
      frontmatter: { footer }
    }
  } = useStaticQuery(query)
  return (
    <SectionWrapper>
      <SectionMax m='auto!important' p={[2, 4]}>
        <Heading6> {title} </Heading6>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Shipping }
