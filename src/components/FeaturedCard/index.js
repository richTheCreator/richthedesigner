import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-flexbox-grid'
import { Heading3, Overline } from '../Typography'
import { Button } from '../Button'
import {
  ProductImage,
  Wrapper,
  InfoContainer,
  BaseBorder,
  BaseBorderBody,
  MiddleDivider
} from './styles'

const FeaturedCard = ({ children }) => {
  const {
    markdownRemark: {
      fields: { slug },
      frontmatter: {
        starter_img: { alt, image },
        title,
        meta_description,
        includes
      }
    }
  } = useStaticQuery(query)

  console.log('featured--card', slug)

  return (
    <Row>
      <Col lg={6} xs={12} style={{ padding: '0px' }}>
        <ProductImage fluid={image.childImageSharp.fluid} />
      </Col>
      <Wrapper lg={6} xs={12} bg={'ivory'} p={[2, 4]}>
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <Overline color='sage'> FEATURED </Overline>
          <Heading3 mt={2} mb={2}>
            {title}
          </Heading3>
          <InfoContainer>
            <Row>
              <Col xs={-1}>
                <BaseBorder color='black' borderWidth='0px 2px 0px 0px'>
                  {includes[0].item}
                </BaseBorder>
              </Col>
              <Col xs={-1}>
                <BaseBorder color='black' borderWidth='0px 0px 0px 0px'>
                  {includes[1].item}
                </BaseBorder>
              </Col>
            </Row>
            <MiddleDivider>
              <Col xs={-1}>
                <BaseBorder color='black' borderWidth='0px 2px 0px 0px'>
                  {includes[2].item}
                </BaseBorder>
              </Col>
              <Col xs={-1}>
                <BaseBorder color='black' borderWidth='0px 0px 0px 0px'>
                  {includes[3].item}
                </BaseBorder>
              </Col>
            </MiddleDivider>
            <MiddleDivider>
              <Col xs={-1}>
                <BaseBorderBody color='black' borderWidth='0px 0px 0px 0px'>
                  {meta_description}
                </BaseBorderBody>
              </Col>
            </MiddleDivider>
          </InfoContainer>
          <Button bg={'black'} color='ivory' mt={4} url={slug}>
            VIEW THE KIT
          </Button>
        </div>
      </Wrapper>
    </Row>
  )
}

export default FeaturedCard

const query = graphql`
  query featured {
    markdownRemark(frontmatter: { templateKey: { eq: "starter-kit" } }) {
      fields {
        slug
      }
      frontmatter {
        starter_img {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        title
        meta_description
        includes {
          item
          description
        }
      }
    }
  }
`
