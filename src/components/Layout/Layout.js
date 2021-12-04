import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import React from 'react'
import Seo from 'src/components/Seo'
import { rootWrapper } from 'src/components/Layout/layout.module.scss'

import 'src/styles/global.scss'
import 'src/styles/variables.scss'
import 'src/styles/reset.css'

export default function Layout({
  children,
  title = null,
  description = null,
  image = null,
  path = null,
}) {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className={rootWrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
