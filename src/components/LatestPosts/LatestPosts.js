import React from 'react'
import {
  latestPosts,
  listItem,
  postInfo,
  postTitle,
  ellipsis,
  middle,
} from 'src/components/LatestPosts/latestPosts.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date
            description
            title
            thumb
          }
        }
      }
    }
  `)
  const posts = data?.allMdx?.nodes

  return (
    <ul className={latestPosts}>
      {posts.map(post => (
        <li key={post.id} className={listItem}>
          <img src={post.frontmatter.thumb} alt={post.frontmatter.title} />
          <div className={postInfo}>
            <Link className={postTitle} to={post.slug}>
              {post.frontmatter.title}
            </Link>
            <p className={ellipsis}>{post.frontmatter.description}</p>
            <time dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </time>
          </div>
          <div className={middle}>
            <Link className='button-like' to={post.slug}>
              続きを読む
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
