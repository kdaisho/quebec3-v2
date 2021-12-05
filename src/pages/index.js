import { Link, graphql, useStaticQuery } from 'gatsby'
import { homepage, intro, main } from 'src/styles/index.module.scss'
import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import PostList from 'src/components/PostList'
import Profile from 'src/components/Profile'
import React from 'react'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
        nodes {
          ...BlogListFragment
        }
      }
      file(relativePath: { eq: "quebec3-cat-opt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: CENTER }
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  const posts = data?.allMdx?.nodes

  return (
    <Layout>
      <Hero
        file={data.file}
        isHomepage={true}
        pageTitle='- 海外移住ポータル -'
        altText='black cat'
      />
      <div className={homepage}>
        <p className={intro}>
          Quebec3は、モントリオール島在住の日本人により2015年から運営されている気ままな個人のブログです。カナダでの生活ぶりを勝手な視点から書いています。
          このブログには将来海外に住んでみたいと思っている人、留学を考えている人、日本国籍を捨てたい人、日本の劣悪な労働環境からの脱出を考えている人、日本の中抜き文化に酷く失望してる人、そんな人たちの思いを加速させる効果があります。
          これまで日本だけでずーっと過ごして来た人、英語を勉強している人、海外で働きたい人、ポテチの袋が上手に開けられない人、皆で仲良くQuebec3を読んで勝手に衝撃を受けて下さい。
        </p>
        <h2 className='large-text'>最近の記事</h2>
        <div className={main}>
          <PostList posts={posts} />
          <Profile />
        </div>
        <Link className='button-like' to='/blogs/1'>
          記事一覧へ
        </Link>
      </div>
    </Layout>
  )
}
