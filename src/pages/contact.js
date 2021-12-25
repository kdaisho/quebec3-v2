import { Link, graphql } from 'gatsby'
import { contact, mail } from 'src/styles/contact.module.scss'
import BackToHome from 'src/components/BackToHome'
import ContactForm from 'src/components/ContactForm'
import Hero from 'src/components/Hero'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/MainContentWrapper'
import React from 'react'

export default function ContactPage({ data }) {
  return (
    <Layout
      title='コンタクト'
      description='Quebec3は日本脱出を目指す日本人のためのブログです。このページからコンタクトフォームを通じて管理人宛にメッセージを送ることができます。'
    >
      <Hero hero={data.heroImage} pageTitle='接触を試みる' altText='sky' />
      <MainContentWrapper>
        <div className={contact}>
          <h1>接触を試みる</h1>
          <p>
            Quebec3はカナダのケベック州、モントリオールという街に住む管理人が好き勝手に書いてるブログです。海外移住、カナダでの暮らし、労働環境、日本のことなんかを歪んだ視点から書いてます。
          </p>
          <ContactForm />
          <BackToHome destination='/' text='ホームへ戻る' />
        </div>
      </MainContentWrapper>
    </Layout>
  )
}

export const aboutPageHeroQuery = graphql`
  {
    heroImage: file(relativePath: { eq: "quebec3-sky-opt.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          placeholder: BLURRED
        )
      }
    }
  }
`
