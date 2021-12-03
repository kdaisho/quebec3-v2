import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from 'src/components/Layout'
import PostList from 'src/components/PostList'
import Profile from 'src/components/Profile'
import React from 'react'
import { homepage } from 'src/styles/index.module.scss'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
        nodes {
          ...BlogListFragment
        }
      }
    }
  `)
  const posts = data?.allMdx?.nodes

  return (
    <Layout>
      <h2>最近の記事</h2>
      <div className={homepage}>
        <PostList posts={posts} />
        <Profile />
      </div>
      <Link className='button-like' to='/blogs/1'>
        記事一覧へ
      </Link>
    </Layout>
  )
}
