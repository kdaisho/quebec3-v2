import { Link, graphql, useStaticQuery } from 'gatsby'
import {
  heroContainer,
  homepage,
  homepageContainer,
} from 'src/styles/index.module.scss'
import Layout from 'src/components/Layout'
import PostList from 'src/components/PostList'
import Profile from 'src/components/Profile'
import React from 'react'
import { SIZE } from 'src/components/constants'
import { StaticImage } from 'gatsby-plugin-image'

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
      <div className={heroContainer}>
        <div className='text-container'>
          <div className='text'>
            <h1 className='site-title'>Quebec3</h1>
            <h2>- 海外移住ポータル -</h2>
          </div>
          <Link className='button-like' to='/blogs/1'>
            記事一覧
          </Link>
        </div>
        <StaticImage
          src='../images/quebec3-cat-opt.jpg'
          alt='black cat'
          aspectRatio={4 / 1}
          placeholder='blurred'
          style={{
            minHeight: SIZE.HERO.MIN_HEIGHT,
            maxHeight: SIZE.HERO.MAX_HEIGHT,
          }}
          layout='fullWidth'
          transformOptions={{ cropFocus: 'center' }}
        />
      </div>

      <div className={`page-wrapper ${homepageContainer}`}>
        <h2 className='title'>最近の記事</h2>
        <div className={homepage}>
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
