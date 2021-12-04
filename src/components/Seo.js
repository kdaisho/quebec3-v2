import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'

export default function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

  const defaults = data?.site?.siteMetadata
  const title = props.title || defaults.title
  const description = props.description || defaults.description
  const image = new URL(props.image || defaults.image, defaults.siteUrl)
  const url = new URL(props.path || '/', defaults.siteUrl)

  return (
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href={url} />
      {image && <meta name='image' content={image} />}
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  )
}
