import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/MainContentWrapper'
import React from 'react'

export default function PageNotFound() {
  return (
    <Layout>
      <MainContentWrapper>
        <h1>Hum, 404 Page Not Found</h1>
        <p>お探しのページは見つかりませんでした。</p>
        <BackToHome destination='/' text='ホームへ戻る' />
      </MainContentWrapper>
    </Layout>
  )
}
