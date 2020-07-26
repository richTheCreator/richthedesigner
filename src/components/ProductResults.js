import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class ProductResults extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log('posts-----', posts)

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
        {posts &&
          posts.map(({ node: post }) => (
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
