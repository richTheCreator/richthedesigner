import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

const ProductResults = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  // array of unique categories in current products & an All option
  const defaultCat = 'all'
  const uniqueCategories = [defaultCat, ...new Set(posts.map(({ node: post }) => post.frontmatter.category.toLowerCase()))]

  // filter state
  const [state, setState] = useState({
    filteredData: posts,
    appliedFilter: defaultCat,
    categories: uniqueCategories
  })

  const applyCategoryFilter = (cat) => {
    // checking for default
    if (cat === defaultCat) {
      return (
        setState({
          filteredData: posts,
          appliedFitler: cat,
          categories: uniqueCategories
        })
      )
    }
    // fitlering based on cat
    const filtered = posts.filter(post => {
      const { category } = post.node.frontmatter
      return (
        category.toLowerCase().includes(cat)
      )
    })

    setState({
      filteredData: filtered,
      appliedFilter: cat,
      categories: uniqueCategories

    })
  }
  const { filteredData, appliedFilter, categories } = state

  return (
    <div className='columns is-multiline'>
      {posts &&
          posts.map(({ node: post }) => {
            if (post.frontmatter.featured.isFeatured) {
              return (
                <div className='is-parent column is-6' key={post.id}>
                  <article className='tile is-child box notification'>
                    <p>
                      <Link
                        className='title has-text-primary is-size-4'
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className='subtitle is-size-5 is-block'>
                        is featured
                      </span>
                    </p>
                    <p>
                      {post.frontmatter.featured.text}
                      <br />
                      <br />
                      <Link className='button' to={post.fields.slug}>
                          Keep Reading →
                      </Link>
                    </p>
                  </article>
                </div>
              )
            }
          })}
      {
        categories.map(cat =>
          <button onClick={() => applyCategoryFilter(cat)}> {cat} </button>
        )
      }

      {filteredData &&
          filteredData.map(({ node: post }) => (
            <div className='is-parent column is-6' key={post.id}>
              <article className='tile is-child box notification'>
                <p>
                  <Link
                    className='title has-text-primary is-size-4'
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className='subtitle is-size-5 is-block'>
                    {post.frontmatter.date}
                  </span>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className='button' to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
    </div>
  )
}

ProductResults.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductResultsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product-details" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                category
                templateKey
                featured {
                  isFeatured
                  text
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductResults data={data} count={count} />}
  />
)
