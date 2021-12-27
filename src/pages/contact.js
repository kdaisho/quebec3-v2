import BackToHome from 'src/components/BackToHome'
import ContactForm from 'src/components/ContactForm'
import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/MainContentWrapper'
import React from 'react'
import { graphql } from 'gatsby'

export default function ContactPage({ data }) {
  return (
    <Layout
      title='コンタクト'
      description='Quebec3は日本脱出を目指す日本人のためのブログです。このページからコンタクトフォームを通じて管理人宛にメッセージを送ることができます。'
    >
      <Hero hero={data.heroImage} pageTitle='接触を試みる' altText='sky' />
      <MainContentWrapper>
        <h1>接触を試みる</h1>
        <p>
          ここからメッセージを送ると、それは光の速さで海を渡り国境を越えカナダの片隅でパンケーキを食わんとする管理人の頭に刺さります。
        </p>
        <ContactForm />
        <BackToHome destination='/' text='ホームへ戻る' />
      </MainContentWrapper>
    </Layout>
  )
}

export const aboutPageHeroQuery = graphql`
  {
    heroImage: file(relativePath: { eq: "workshop.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          placeholder: BLURRED
        )
      }
    }
  }
`
