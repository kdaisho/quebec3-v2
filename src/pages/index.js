import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello from QC3</h1>
      <Link to='/about'>About</Link>
    </Layout>
  )
}
