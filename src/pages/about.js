import React from 'react'
import Layout from 'src/components/Layout'
import BackToHome from 'src/components/BackToHome'

export default function AboutPage() {
  return (
    <Layout
      title='Quebec3について'
      description='Quebec3は日本脱出を目指す日本人のためのブログです'
    >
      <h1>Quebec3について</h1>
      <BackToHome />
    </Layout>
  )
}
