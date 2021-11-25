import React from 'react'
import Layout from 'src/components/Layout'
import { Link } from 'gatsby'

export default function PageNotFound() {
  return (
    <Layout>
      <h1>404 Page Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link to='/'>ホームページへ戻る</Link>
    </Layout>
  )
}
