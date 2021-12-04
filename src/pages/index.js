import { Link, graphql, useStaticQuery } from 'gatsby'
import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import PostList from 'src/components/PostList'
import Profile from 'src/components/Profile'
import React from 'react'
import { homepageContents } from 'src/styles/index.module.scss'

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
      <Hero />
      <div className='page-wrapper'>
        <h2 className='large-text'>最近の記事</h2>
        <div className={homepageContents}>
          <PostList posts={posts} />
          <Profile />
        </div>
        <Link className='button-like' to='/blogs/1'>
          記事一覧へ
        </Link>
      </div>
    </Layout>
  )
}
