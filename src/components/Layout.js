import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Head } from './Head'

export default function Layout({
  children,
  title = null,
  description = null,
  image = null,
  path = null,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const meta = data?.site?.siteMetadata ?? {}

  return (
    <>
      <Head title={title} description={description} image={image} path={path} />
      <header>
        <Link to='/'>{meta.title}</Link>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
