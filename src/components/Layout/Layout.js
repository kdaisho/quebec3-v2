import { LOGO, PAGE_WIDTH } from 'src/components/constants'
import React, { useState } from 'react'
import {
  container,
  content,
  contentWrapper,
  header,
} from 'src/components/Layout/layout.module.scss'
import Footer from 'src/components/Footer'
import Head from 'src/components/Head'
import { Link } from 'gatsby'
import Logo from 'src/images/Logo'
import 'src/styles/global.scss'
import 'src/styles/variables.scss'
import 'src/styles/reset.css'

export default function Layout({
  children,
  title = null,
  description = null,
  image = null,
  path = null,
  wrapperWidth = PAGE_WIDTH,
}) {
  const [logoColor, setLogoColor] = useState(LOGO.DEFAULT)

  return (
    <>
      <Head title={title} description={description} image={image} path={path} />
      <div className={contentWrapper}>
        <header className={header}>
          <div className={container}>
            <Link
              to='/'
              onMouseEnter={() => setLogoColor(LOGO.HOVERED)}
              onMouseLeave={() => setLogoColor(LOGO.DEFAULT)}
            >
              <Logo
                outline={logoColor.outline}
                inner={logoColor.inner}
                title='logo'
              />
            </Link>
            <nav>
              <Link to='/'>ホーム</Link>
              <Link to='/blogs'>記事一覧</Link>
              <Link to='/about'>Quebec3について</Link>
            </nav>
          </div>
        </header>
        <main className={content} style={{ maxWidth: wrapperWidth }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
