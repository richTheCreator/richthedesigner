const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const sharp = require('sharp')

sharp.simd(false)
sharp.cache(false)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              company_ref
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMdx.edges
    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        // company: edge.node.frontmatter.company,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })

    // Tag pages:
    let company = []
    // Iterate through each post, putting all found company into `company`
    posts.forEach((edge) => {
      if (_.get(edge, 'node.frontmatter.company_ref')) {
        company = company.concat(edge.node.frontmatter.company_ref)
        console.log('if-------company-', company)
      }
    })
    // Eliminate duplicate company
    company = _.uniq(company)

    console.log('nodeContext------', company)
    // Make tag pages
    company.forEach((company) => {
      const companyPath = `/work/${_.kebabCase(company)}/`
      createPage({
        path: companyPath,
        component: path.resolve('src/templates/company-profile.js'),
        context: {
          company
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
