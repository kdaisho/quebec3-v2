import { Link, graphql, useStaticQuery } from 'gatsby'
import {
  ellipsis,
  latestPosts,
  listItem,
  middle,
  postInfo,
  postTitle,
} from 'src/components/LatestPosts/latestPosts.module.scss'
import { DEFAULT_THUMB } from 'src/components/constants'
import React from 'react'

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
        nodes {
          frontmatter {
            date(formatString: "YYYY年M月DD日")
            thumb
            title
            description
          }
          id
          slug
        }
      }
    }
  `)
  const posts = data?.allMdx?.nodes

  return (
    <ul className={latestPosts}>
      {posts.map(post => (
        <li key={post.id} className={listItem}>
          <Link className={postTitle} to={post.slug}>
            <img
              src={post.frontmatter.thumb || DEFAULT_THUMB}
              alt={post.frontmatter.title}
            />
          </Link>
          <div className={postInfo}>
            <h2 className={postTitle}>{post.frontmatter.title}</h2>
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
