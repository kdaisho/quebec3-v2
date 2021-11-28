import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import React from 'react'

export default function Posts() {
  return (
    <Layout title='投稿記事一覧' description='Quebec3の投稿記事一覧ページ'>
      <h1>投稿記事一覧</h1>
      <BackToHome />
    </Layout>
  )
}
