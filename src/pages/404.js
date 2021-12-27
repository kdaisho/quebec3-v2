import BackToHome from 'src/components/BackToHome'
import Layout from 'src/components/Layout'
import MainContentWrapper from 'src/components/MainContentWrapper'
import React from 'react'
import { is404 } from 'styles/404.module.scss'

export default function PageNotFound() {
  return (
    <Layout>
      <MainContentWrapper classNameProp={is404}>
        <h1>404 Page Not Found</h1>
        <p>悪いニュースです。お探しのページは見つかりません。</p>
        <BackToHome destination='/' text='ホームへ戻る' />
      </MainContentWrapper>
    </Layout>
  )
}
