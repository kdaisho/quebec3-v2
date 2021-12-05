import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  article,
  featuredImage,
  footerNav,
  header,
  keywords,
  main,
} from 'src/components/PostLayout/postLayout.module.scss'
import ArticleFooterNav from 'src/components/ArticleFooterNav'
import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Tags } from 'src/components/PostLayout/utils'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query ($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          slug
          body
          frontmatter {
            date(formatString: "YYYY年DD月MM日")
            description
            tags
            title
          }
        }
      }
    }
    mdx(slug: { eq: $slug }) {
      frontmatter {
        hero {
          childImageSharp {
            gatsbyImageData(width: 680, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const Article = ({ data, pageContext }) => {
  const { node } = data.allMdx.edges[0]
  const { date, title, description, tags } = node.frontmatter
  const toPrev = pageContext.prev ? `/${pageContext.prev}` : 'disabled'
  const toNext = pageContext.next ? `/${pageContext.next}` : 'disabled'
  const image = getImage(data.mdx.frontmatter.hero)

  return (
    <Layout title={title} description={description}>
      {image && (
        <div className={featuredImage}>
          <GatsbyImage
            image={image}
            alt={title}
            style={{ overflow: 'visible' }}
          />
        </div>
      )}
      <main className={main}>
        <div className={header}>
          <h1>{title}</h1>
          <time dateTime={date}>{date}</time>
          {tags && <Tags tags={tags} cname={keywords} />}
        </div>
        <article className={article}>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
        <ArticleFooterNav toPrev={toPrev} toNext={toNext} />
        <nav className={footerNav}>
          <BackToHome
            destination={`/blogs/${Math.ceil(pageContext.currentPage / 10)}`}
            text='記事一覧へ戻るぞぉ'
          />
        </nav>
      </main>
    </Layout>
  )
}

export default Article
