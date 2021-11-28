import { PRIMARY, YELLOW } from 'src/components/constants'
import React, { useEffect, useState } from 'react'
import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'

export default function Posts() {
  const [color, setColor] = useState(PRIMARY)

  return (
    <Layout title='投稿記事一覧' description='Quebec3の投稿記事一覧ページ'>
      <h1>投稿記事一覧</h1>
      <BackToHome
        color={color}
        onMouseEnter={() => setColor(YELLOW)}
        onMouseLeave={() => setColor(PRIMARY)}
      />
    </Layout>
  )
}
