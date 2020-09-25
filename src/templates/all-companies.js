import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'

const TagsPage = ({ data }) => {
  const {
    allMdx: { edges }
  } = data

  return (
    <Layout>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div
              className='column is-10 is-offset-1'
              style={{ marginBottom: '6rem' }}
            >
              <h1 className='title is-size-2 is-bold-light'>Work</h1>
              <ul className='taglist'>
                {edges.map(({ node }) => (
                  <li key={node.frontmatter.company}>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.company}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TagsPage

export const pageqQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 15
      sort: { fields: [frontmatter___company], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "company-profile" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            company
          }
        }
      }
    }
  }
`
