import Layout from 'src/components/Layout'
import { Pagination } from 'src/components/Pagination'
import PostList from 'src/components/PostList'
import React from 'react'
import { graphql } from 'gatsby'

const BlogList = ({ data }) => {
  return (
    <Layout title='投稿記事一覧' description='Quebec3の投稿記事一覧ページ'>
      <h1>投稿記事一覧</h1>
      <PostList posts={data.allMdx.nodes} />
      <Pagination totalCount={data.allMdx.totalCount} />
    </Layout>
  )
}

export default BlogList

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
          date(formatString: "YYYY年M月DD日")
          thumb
          title
          description
        }
      }
      totalCount
    }
  }
`
