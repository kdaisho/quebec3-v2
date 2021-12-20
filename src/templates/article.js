import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  article,
  articleBody,
  featuredImage,
  footerNav,
} from 'src/styles/article.module.scss'
import ArticleFooterNav from 'src/components/ArticleFooterNav'
import ArticleHeader from 'src/components/ArticleHeader'
import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import MainContentWrapper from 'src/components/MainContentWrapper'
import React from 'react'
import { graphql } from 'gatsby'

export default function Article({ data, pageContext }) {
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
      <MainContentWrapper>
        <article className={article}>
          <ArticleHeader date={date} title={title} tags={tags} />
          <div className={articleBody}>
            <MDXRenderer>{node.body}</MDXRenderer>
          </div>
          <ArticleFooterNav toPrev={toPrev} toNext={toNext} />
          <nav className={footerNav}>
            <BackToHome
              destination={`/blogs/${Math.ceil(pageContext.currentPage / 10)}`}
              text='記事一覧へ戻るぞぉ'
            />
          </nav>
        </article>
      </MainContentWrapper>
    </Layout>
  )
}

export const articleQuery = graphql`
  query ($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          slug
          body
          frontmatter {
            date(formatString: "YYYY年M月D日")
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
