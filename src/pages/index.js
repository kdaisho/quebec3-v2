import LatestPosts from 'src/components/LatestPosts'
import Layout from 'src/components/Layout'
import { Link } from 'gatsby'
import Profile from 'src/components/Profile'
import React from 'react'
import { homepage } from 'src/styles/index.module.scss'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Quebec3 - 海外移住ポータル</h1>
      <h2>最近の記事</h2>
      <div className={homepage}>
        <LatestPosts />
        <Profile />
      </div>
      <Link className='button-like' to='/blogs'>
        記事一覧へ
      </Link>
    </Layout>
  )
}
