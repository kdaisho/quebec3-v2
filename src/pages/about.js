import { Link, graphql } from 'gatsby'
import { about, main, questions } from 'src/styles/about.module.scss'
import BackToHome from 'src/components/BackToHome'
import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/mainContentWrapper'
import React from 'react'

export default function AboutPage({ data }) {
  return (
    <Layout
      title='Quebec3について'
      description='Quebec3は日本脱出を目指す日本人のためのブログです'
    >
      <Hero file={data.file} pageTitle='Quebec3とは' altText='sky' />
      <MainContentWrapper>
        <div className={about}>
          <h1>Quebec3とは</h1>
          <p>
            Quebec3はカナダのケベック州、モントリオールという街に住む管理人が好き勝手に書いてるブログです。海外移住、カナダでの暮らし、労働環境、日本のことなんかを歪んだ視点から書いてます。
          </p>
          <div className={main}>
            <h2>よくある質問（FAQ）</h2>
            <div className={questions}>
              <div>
                <p>🤔❔ なんでカナダに移住したんですか？</p>
                <p>😎❕ カナダ人と結婚したからです。後に離婚しましたけど。</p>
              </div>
              <div>
                <p>🤔❔ 永住権はどうやってとったんです？</p>
                <p>
                  😎❕
                  カナダ人と結婚したのでファミリークラスで取得です。まぁ離婚しましたけど…。
                </p>
              </div>
              <div>
                <p>🤔❔ 英語はカナダで学んだのですか？</p>
                <p>
                  😎❕ 日本で話せるようにしておきました。
                  <Link to='/blog/interview'></Link>
                </p>
              </div>
              <div>
                <p>🤔❔ 仏語は話せるのですか？（仏語はケベック州の公用語）</p>
                <p>
                  😎❕
                  昔はそこそこ話せましたが現在は崩壊しています。ただ、長年住んでるせいか聞き取りは勝手に上達してます。
                </p>
              </div>
              <div>
                <p>🤔❔ 日本では仕事してました？ </p>
                <p>😎❕ 陸上自衛隊に7年勤めました。</p>
              </div>
              <div>
                <p>🤔❔ 現在のお仕事は？ </p>
                <p>😎❕ Web屋です。毎日お家でカタカタしてます。</p>
              </div>
              <div>
                <p>🤔❔ カナダは好きですか？ </p>
                <p>😎❕ ベストですね。</p>
              </div>
            </div>
          </div>
          <BackToHome destination='/' text='ホームへ戻る' />
        </div>
      </MainContentWrapper>
    </Layout>
  )
}

export const aboutPageHeroQuery = graphql`
  {
    file(relativePath: { eq: "quebec3-sky-opt.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          placeholder: BLURRED
        )
      }
    }
  }
`
