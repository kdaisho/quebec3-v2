import React from 'react'
import { Link } from 'gatsby'
import Layout from 'src/components/Layout'

export default function AboutPage() {
  return (
    <Layout
      title='Quebec3について'
      description='Quebec3は日本脱出を目指す日本人のためのブログです'
    >
      <h1>Quebec3について</h1>

      <Link to='/'>Back to home</Link>
    </Layout>
  )
}
