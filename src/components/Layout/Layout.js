import { LOGO, PAGE_WIDTH, SIZE } from 'src/components/constants'
import React, { useState } from 'react'
import {
  container,
  content,
  contentWrapper,
  header,
  imageWrapper,
} from 'src/components/Layout/layout.module.scss'
import Footer from 'src/components/Footer'
import Head from 'src/components/Head'
import { Link } from 'gatsby'
import Logo from 'src/images/Logo'
import { StaticImage } from 'gatsby-plugin-image'
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
              <Link to='/blogs/1'>記事一覧</Link>
              <Link to='/about'>Quebec3について</Link>
            </nav>
          </div>
        </header>
        <div className={imageWrapper}>
          <div className='text-container'>
            <div className='text'>
              <h1>Quebec3</h1>
              <h2>- 海外移住ポータル -</h2>
            </div>
            <Link className='button-like' to='/blogs/1'>
              記事一覧
            </Link>
          </div>
          <StaticImage
            src='../../images/quebec3-cat-opt.jpg'
            alt='black cat'
            aspectRatio={4 / 1}
            placeholder='blurred'
            style={{
              minHeight: SIZE.HERO.MIN_HEIGHT,
              maxHeight: SIZE.HERO.MAX_HEIGHT,
            }}
            layout='fullWidth'
            transformOptions={{ cropFocus: 'center' }}
          />
        </div>
        <main className={content} style={{ maxWidth: wrapperWidth }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
