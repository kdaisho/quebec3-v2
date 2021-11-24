import React, { useState } from 'react'
import {
  header,
  container,
  content,
  isHomepage,
} from 'src/components/Layout/layout.module.scss'
import { NAVY, NONE, WHITE } from 'src/components/constants'
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
}) {
  const defaultColor = {
    outline: NAVY,
    inner: NONE,
  }
  const hovered = {
    outline: WHITE,
    inner: NAVY,
  }
  const [logoColor, setLogoColor] = useState(defaultColor)

  const handleOnHover = () => {
    setLogoColor(color => (color.outline === NAVY ? hovered : defaultColor))
  }

  return (
    <>
      <Head title={title} description={description} image={image} path={path} />
      <header className={header}>
        <div className={container}>
          <Link
            to='/'
            onMouseEnter={handleOnHover}
            onMouseLeave={handleOnHover}
          >
            <Logo
              className='logo'
              outline={logoColor.outline}
              inner={logoColor.inner}
              title='logo'
            />
          </Link>
          <nav>
            <Link to='/about'>Quebec3について</Link>
          </nav>
        </div>
      </header>
      <main className={`${content} ${isHomepage}`}>{children}</main>
    </>
  )
}
