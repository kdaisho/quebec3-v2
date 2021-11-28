const { ITEMS_PER_PAGE } = require('./constants')
const { getPath } = require('./utils')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { errors, data } = await graphql(`
    {
      allMdx {
        totalCount
      }
    }
  `)

  if (errors) {
    throw new Error('There was an error')
  }

  const pageCount = Math.ceil(data.allMdx.totalCount / ITEMS_PER_PAGE)

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: getPath('/blogs', i),
      component: path.resolve('./src/templates/blogs.js'),
      context: {
        limit: ITEMS_PER_PAGE,
        skip: i * ITEMS_PER_PAGE,
      },
    })
  }
}
