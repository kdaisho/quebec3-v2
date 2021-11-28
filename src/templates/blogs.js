import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import { Pagination } from 'src/components/Pagination'
import React from 'react'

const BlogPage = ({ data }) => {
  return (
    <Layout title='投稿記事一覧' description='Quebec3の投稿記事一覧ページ'>
      <h1>投稿記事一覧</h1>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.id}>
            <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={data.allMdx.totalCount} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
        }
      }
      totalCount
    }
  }
`
