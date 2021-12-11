import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  ellipsis,
  latestPosts,
  listItem,
  middle,
  postInfo,
  postTitle,
  thumb,
} from 'src/components/PostList/post-list.module.scss'
import { Link } from 'gatsby'
import { PATH_DEFAULT_THUMB } from 'src/components/constants'
import React from 'react'

export default function PostList({ posts }) {
  return (
    <ul className={latestPosts}>
      {posts.map(post => {
        const image = getImage(post.frontmatter.thumb)

        return (
          <li key={post.id} className={listItem}>
            <Link to={`/${post.slug}`} className={thumb}>
              {image ? (
                <GatsbyImage image={image} alt={post.frontmatter.title} />
              ) : (
                <img src={PATH_DEFAULT_THUMB} alt='quebec3 logo' />
              )}
            </Link>
            <div className={postInfo}>
              <h2 className={postTitle}>{post.frontmatter.title}</h2>
              <p className={ellipsis}>{post.frontmatter.description}</p>
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
            </div>
            <div className={middle}>
              <Link className='button-like' to={`/${post.slug}`}>
                続きを読む
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
