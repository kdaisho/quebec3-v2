import React, { useState } from 'react'
import {
  header,
  container,
  content,
} from 'src/components/Layout/layout.module.scss'
import { PAGE_WIDTH, LOGO } from 'src/components/constants'
import { Link } from 'gatsby'
import Head from 'src/components/Head'
import 'src/styles/reset.css'
import 'src/styles/variables.scss'
import 'src/styles/global.scss'
import Logo from 'src/images/logo.opt'

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
      <header className={header}>
        <div className={container}>
          <Link
            to='/'
            onMouseEnter={() => setLogoColor(LOGO.HOVERED)}
            onMouseLeave={() => setLogoColor(LOGO.DEFAULT)}
          >
            <Logo
              className='logo'
              outline={logoColor.outline}
              inner={logoColor.inner}
              title='logo'
            />
          </Link>
          <nav>
            <Link to='/'>ホーム</Link>
            <Link to='/posts'>記事一覧</Link>
            <Link to='/about'>Quebec3について</Link>
          </nav>
        </div>
      </header>
      <main className={content} style={{ maxWidth: wrapperWidth }}>
        {children}
      </main>
    </>
  )
}
