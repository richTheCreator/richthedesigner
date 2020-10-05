import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Studies from '../templates/CompanyProfile'
import { useTheme } from '../../static/styles/theme-context'

const CompanyProfile = ({ data, pageContext }) => {
  const { toggleTheme } = useTheme()
  const { edges: posts, totalCount } = data.posts
  const { frontmatter } = data.page
  console.log('posts', posts)
  useEffect(() => {
    toggleTheme(frontmatter.theme)
  }, [])

  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className='is-size-2'>{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ))

  const companyHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${pageContext.name}”`

  return <Studies name={frontmatter.company} caseStudies={posts} />
}

export default CompanyProfile

export const tagPageQuery = graphql`
  query TagPage($company: String) {
    page: mdx(frontmatter: { company: { eq: $company } }) {
      frontmatter {
        company
        theme
      }
    }
    posts: allMdx(
      limit: 10
      filter: { frontmatter: { company_ref: { in: [$company] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover_image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            project {
              blurb
              focus
            }
          }
        }
      }
    }
  }
`
