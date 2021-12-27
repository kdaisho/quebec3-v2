import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/MainContentWrapper'
import Pagination from 'src/components/Pagination'
import PostList from 'src/components/PostList'
import React from 'react'
import { graphql } from 'gatsby'

export default function BlogList({ data, pageContext }) {
  return (
    <Layout title='投稿記事一覧' description='Quebec3の投稿記事一覧ページ'>
      <Hero hero={data.heroImage} pageTitle='投稿記事一覧' altText='pancake' />
      <MainContentWrapper>
        <h1>投稿記事一覧</h1>
        <div className='content-margin'>
          <PostList posts={data.allPosts.nodes} />
        </div>
        <Pagination
          totalCount={data.allPosts.totalCount}
          currentPage={pageContext.currentPage}
        />
      </MainContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allPosts: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ...BlogListFragment
      }
      totalCount
      pageInfo {
        currentPage
      }
    }
    heroImage: file(relativePath: { eq: "quebec3-pancake-opt.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          placeholder: BLURRED
        )
      }
    }
  }
`
