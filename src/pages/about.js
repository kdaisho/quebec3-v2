import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import React from 'react'

export default function AboutPage() {
  return (
    <Layout
      title='Quebec3について'
      description='Quebec3は日本脱出を目指す日本人のためのブログです'
    >
      <h1>Quebec3について</h1>
      <BackToHome destination='/' text='ホームへ戻る' />
    </Layout>
  )
}

// TODO: bring image sharp object here to render hero image
// export const pageQuery = graphql`
//   {
//     file(relativePath: { eq: "quebec3-cat-opt.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(
//           transformOptions: { cropFocus: CENTER }
//           placeholder: BLURRED
//         )
//       }
//     }
//   }
// `
