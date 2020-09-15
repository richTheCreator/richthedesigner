import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { useTheme } from '../../static/styles/theme-context'

const CompanyProfile = ({ data, pageContext }) => {
  const { theme, toggleTheme } = useTheme()
  const { edges: posts, totalCount } = data.posts
  const { frontmatter } = data.page

  console.log('pageContext', frontmatter.theme)

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

  return (
    <Layout>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div
              className='column is-10 is-offset-1'
              style={{
                marginBottom: '6rem'
              }}
            >
              <h3 className='title is-size-4 is-bold-light'>{companyHeader}</h3>
              <h4>for the company {frontmatter.company}</h4>
              <ul className='taglist'>{postLinks}</ul>
              <p>
                <Link to='/work/'>Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
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
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
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
          }
        }
      }
    }
  }
`
