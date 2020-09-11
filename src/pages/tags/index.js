import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({ children }) => {
  const {
    allMdx: { group },
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(query)
  return (
    <Layout>
      <section className='section'>
        <Helmet title={`Tags | ${title}`} />
        <div className='container content'>
          <div className='columns'>
            <div
              className='column is-10 is-offset-1'
              style={{ marginBottom: '6rem' }}
            >
              <h1 className='title is-size-2 is-bold-light'>Tags</h1>
              <ul className='taglist'>
                {group.map((tag) => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
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

const query = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
