import { header, keywords } from './article-header.module.scss'
import React from 'react'

export default function ArticleHeader({ title, date, tags }) {
  return (
    <div className={header}>
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
      {tags && (
        <ul className={keywords}>
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
