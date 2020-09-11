import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Heading4,
  Button as ButtonText,
  Caption,
  Body2,
  Heading6
} from '../Typography'
import { Button, LinkButton } from '../Button'
import { SectionMax, SectionWrapper } from '../Containers'
import { ProductImg, TextContainer, Title, TitleContainer } from './styles'

const Values = ({ children }) => {
  const {
    mdx: {
      frontmatter: {
        etcValues: { values, backgroundImg }
      }
    }
  } = useStaticQuery(query)

  return (
    <SectionWrapper bg='black' pl={[0, 0, 5, 6]} pr={[0, 0, 5, 6]} pt={0}>
      <SectionMax
        style={{ position: 'relative' }}
        justifyContent={['center', 'center', 'flex-end', 'flex-end']}
        m='auto!important'
        p={0}
      >
        <Col xs={12} style={{ height: '100%', padding: '0px' }}>
          <TitleContainer xs pl={[4, 4, 0, 0]} pr={[4, 4, 0, 0]}>
            <Title mb={3} mt={0}>
              The Elevated Experience
            </Title>
          </TitleContainer>
          <ProductImg
            fluid={backgroundImg.childImageSharp.fluid}
            height={['300px', '300px', '400px', '400px']}
          />
          <TextContainer
            m={'auto'}
            bg={'sage'}
            lg={10}
            xs={11}
            pt={4}
            pb={4}
            pl={[3, 3, 4, 4]}
            pr={[3, 3, 4, 4]}
            mt={'-50px'}
          >
            <Row>
              {values.map((v) => (
                <Col xs style={{ minWidth: '270px' }}>
                  <Heading6 color='ivory'>{v.value}</Heading6>
                  <Body2 color='ivory' mb={4}>
                    {v.description}
                  </Body2>
                </Col>
              ))}
            </Row>
          </TextContainer>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Values }

const query = graphql`
  query valuesInfo {
    mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        slug
      }
      frontmatter {
        etcValues {
          values {
            value
            description
          }
          backgroundImg {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
