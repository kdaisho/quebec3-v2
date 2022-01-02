import { Link, graphql, useStaticQuery } from 'gatsby'
import { intro, main } from 'src/styles/index.module.scss'
import Aside from 'src/components/Aside'
import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/MainContentWrapper'
import { PATH } from 'src/components/constants'
import PostList from 'src/components/PostList'
import React from 'react'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      latestPosts: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 5
      ) {
        nodes {
          ...BlogListFragment
        }
      }
      heroImage: file(relativePath: { eq: "quebec3-cat-opt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: CENTER }
            placeholder: BLURRED
          )
        }
      }
      popularPosts: allMdx(
        filter: {
          slug: {
            in: [
              "blog/cybercrime-japan"
              "blog/japan"
              "blog/japanese-nationality"
              "blog/canada-right-to-vote"
              "blog/soylent"
            ]
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          ...BlogListFragment
        }
      }
    }
  `)

  const posts = data?.latestPosts?.nodes
  const popularPosts = data?.popularPosts?.nodes

  return (
    <Layout>
      <Hero
        hero={data.heroImage}
        isHomepage={true}
        pageTitle='- 海外移住ポータル -'
        altText='black cat'
      />
      <MainContentWrapper>
        <p className={intro}>
          Quebec3は、モントリオール島在住の日本人により2015年から運営されている気ままな個人のブログです。カナダでの生活ぶりを勝手な視点から書いています。
          このブログには将来海外に住んでみたいと思っている人、留学を考えている人、日本国籍を捨てたい人、日本の劣悪な労働環境からの脱出を考えている人、日本の中抜き文化に酷く失望してる人、そんな人たちの思いを加速させる効果があります。
          これまで日本だけでずーっと過ごして来た人、英語を勉強している人、海外で働きたい人、ポテチの袋が上手に開けられない人、皆で仲良くQuebec3を読んで勝手に衝撃を受けて下さい。
        </p>
        <div className={main}>
          <div className='lists'>
            <div className='list'>
              <h2 className='large-text'>最近の記事</h2>
              <PostList posts={posts} />
              <Link className='button-like' to={PATH.BLOGS}>
                記事一覧へ
              </Link>
            </div>
            <div className='list'>
              <h2 className='large-text'>大変な人気の記事</h2>
              <PostList posts={popularPosts} />
            </div>
          </div>
          <Aside />
        </div>
      </MainContentWrapper>
    </Layout>
  )
}
