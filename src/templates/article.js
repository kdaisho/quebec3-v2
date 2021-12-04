import { Hero, Tags } from 'src/components/PostLayout/utils'
import {
  article,
  featuredImage,
  footerNav,
  header,
  heroImage,
  keywords,
  main,
} from 'src/components/PostLayout/postLayout.module.scss'
import ArticleFooterNav from 'src/components/ArticleFooterNav'
import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
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
            hero
            tags
            thumb
            title
          }
        }
        next {
          slug
        }
        previous {
          slug
        }
      }
    }
  }
`

const Article = ({ data, pageContext }) => {
  const { node } = data.allMdx.edges[0]
  const { body } = node
  const { date, title, description, hero, tags } = node.frontmatter
  const toPrev = pageContext.previous
    ? `/${pageContext.previous.node.slug}`
    : 'disabled'
  const toNext = pageContext.next
    ? `/${pageContext.next.node.slug}`
    : 'disabled'

  return (
    <Layout title={title} description={description}>
      {hero && (
        <div className={featuredImage}>
          <Hero cname={heroImage} hero={hero} title={title} />
        </div>
      )}
      <main className={main}>
        <div className={header}>
          <h1>{title}</h1>
          <time dateTime={date}>{date}</time>
          {tags && <Tags tags={tags} cname={keywords} />}
        </div>

        <article className={article}>
          <MDXRenderer>{body}</MDXRenderer>
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
