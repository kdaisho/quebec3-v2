import React from 'react'
import Layout from 'src/components/Layout'
import BackToHome from 'src/components/BackToHome'
import { ARTICLE_WIDTH } from 'src/components/constants'
import {
  header,
  heroImage,
  article,
  keywords,
  footerNav,
} from './postLayout.module.scss'

export default function PostLayout({ children, pageContext }) {
  const { date, title, description, hero, tags, timeToRead } =
    pageContext.frontmatter
  const renderHero = hero => {
    if (hero) {
      return <img className={heroImage} src={hero} alt={title} />
    }
  }
  const renderTags = tags => {
    if (tags) {
      return (
        <ul className={keywords}>
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )
    }
  }
  return (
    <Layout
      title={title}
      description={description}
      wrapperWidth={ARTICLE_WIDTH}
    >
      {renderHero(hero)}
      <div className={header}>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
        {renderTags(tags)}
      </div>
      <article className={article}>{children}</article>

      <nav className={footerNav}>
        <BackToHome />
      </nav>
    </Layout>
  )
}
