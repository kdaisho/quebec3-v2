const { ITEMS_PER_PAGE } = require('./constants')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    await makeArticleFromMdx({ graphql, actions }),
    await paginate({ graphql, actions }),
  ])
}

async function paginate({ graphql, actions }) {
  const { errors, data } = await graphql(`
    {
      allMdx {
        totalCount
      }
    }
  `)

  if (errors) {
    throw new Error('Error on pagination creation')
  }

  const pageCount = Math.ceil(data.allMdx.totalCount / ITEMS_PER_PAGE)

  for (let i = 0; i < pageCount; i++) {
    actions.createPage({
      path: `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/blogs.js'),
      context: {
        limit: ITEMS_PER_PAGE,
        skip: i * ITEMS_PER_PAGE,
        currentPage: i + 1,
      },
    })
  }
}

async function makeArticleFromMdx({ graphql, actions }) {
  const { errors, data } = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            slug
            frontmatter {
              date(formatString: "YYYY年DD月MM日")
              description
              tags
              title
            }
          }
        }
      }
    }
  `)

  if (errors) {
    throw new Error('Error on article creation')
  }

  const posts = data.allMdx.edges

  posts.forEach((post, i) => {
    actions.createPage({
      path: `/${post.node.slug}`,
      component: path.resolve('./src/templates/article.js'),
      context: {
        slug: post.node.slug,
        prev: posts[i - 1]?.node.slug,
        next: posts[i + 1]?.node.slug,
        currentPage: i + 1,
      },
    })
  })
}

// For MDX users: This is required to make childImageSharp available in GraphQL
// source: https://github.com/gatsbyjs/gatsby/issues/18271#issuecomment-547097964
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      hero: File @fileByRelativePath
      thumb: File @fileByRelativePath
    }
  `)
}
