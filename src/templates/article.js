import { Hero, Tags } from 'src/components/PostLayout/utils'
import { Link, graphql } from 'gatsby'
import {
  article,
  footerNav,
  header,
  heroImage,
  keywords,
  nav,
} from 'src/components/PostLayout/postLayout.module.scss'
import { ARTICLE_WIDTH } from 'src/components/constants'
import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'

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
    <Layout
      title={title}
      description={description}
      wrapperWidth={ARTICLE_WIDTH}
    >
      {hero && <Hero cname={heroImage} hero={hero} title={title} />}
      <div className={header}>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
        {tags && <Tags tags={tags} cname={keywords} />}
      </div>
      <article className={article}>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      <nav className={nav}>
        <Link disabled={toPrev === 'disabled' ? true : false} to={toPrev}>
          前の記事へ
        </Link>
        <Link disabled={toNext === 'disabled' ? true : false} to={toNext}>
          次の記事へ
        </Link>
      </nav>

      <nav className={footerNav}>
        <BackToHome
          destination={`/blogs/${Math.ceil(pageContext.currentPage / 10)}`}
          text='ブログ一覧'
        />
      </nav>
    </Layout>
  )
}

export default Article
