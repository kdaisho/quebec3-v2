import { Hero, Tags } from './utils'
import {
  article,
  footerNav,
  header,
  heroImage,
  keywords,
} from './postLayout.module.scss'
import { ARTICLE_WIDTH } from 'src/components/constants'
import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import React from 'react'

export default function PostLayout({ children, pageContext }) {
  const { date, title, description, hero, tags } = pageContext.frontmatter
  const date_ = new Date(date).toLocaleDateString('ja-JP')

  return (
    <Layout
      title={title}
      description={description}
      wrapperWidth={ARTICLE_WIDTH}
    >
      {hero && <Hero cname={heroImage} hero={hero} title={title} />}
      <div className={header}>
        <h1>{title}</h1>
        <time dateTime={date_}>{date_}</time>
        {tags && <Tags tags={tags} cname={keywords} />}
      </div>
      <article className={article}>{children}</article>
      <nav className={footerNav}>
        <BackToHome destination='/blogs/1' text='ブログ一覧' />
      </nav>
    </Layout>
  )
}
