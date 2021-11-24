import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import { homepage, profile, latestPosts } from 'src/styles/index.module.scss'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "YYYY年M月D日")
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
    <Layout>
      <h1>Quebec3 - 海外移住ポータル</h1>
      <h2>最近の記事</h2>
      <div className={homepage}>
        <div className='left'>
          <ul className={latestPosts}>
            {posts.map(post => (
              <li key={post.id}>
                <img
                  className='left'
                  data-url={post.frontmatter.thumb}
                  src={post.frontmatter.thumb}
                  alt={post.frontmatter.title}
                />
                <div className='right'>
                  <Link className='cta' to={post.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <p>{post.frontmatter.description}</p>
                  <time datetime={post.frontmatter.date}>
                    {post.frontmatter.date}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`right ${profile}`}>
          <img
            src='https://res.cloudinary.com/de9x7yfyb/image/upload/c_scale,w_250/v1637543915/samples/qc3/profile/2021-profile-bright-opt_alp6vj.jpg'
            alt='Kyoshin'
          />
        </div>
      </div>
    </Layout>
  )
}
