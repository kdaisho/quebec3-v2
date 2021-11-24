import React from 'react'
import { Link } from 'gatsby'
import Layout from 'src/components/Layout'

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter
  return (
    <Layout title={title} description={description} maxWidth='740px'>
      <h1>{title}</h1>
      {children}
      <Link to='/'>&larr; back</Link>
    </Layout>
  )
}
