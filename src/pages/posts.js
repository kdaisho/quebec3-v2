import React from 'react'
import Layout from 'src/components/Layout'
import BackToHome from 'src/components/BackToHome'

export default function Posts() {
  return (
    <Layout title='投稿記事一覧' description='Quebec3の投稿記事一覧ページ'>
      <h1>投稿記事一覧</h1>
      <BackToHome />
    </Layout>
  )
}
