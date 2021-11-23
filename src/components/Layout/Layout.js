import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Head } from 'src/components/Head'
import 'src/styles/reset.css'
import 'src/styles/variables.scss'
import 'src/styles/global.scss'
import { header, container, content } from './layout.module.scss'
import Logo from 'src/images/logo.opt'

export default function Layout({
  children,
  title = null,
  description = null,
  image = null,
  path = null,
}) {
  const yellow = '#ffff00'
  const white = '#fff'
  const [logoColor, setLogoColor] = useState(white)

  const handleOnHover = () => {
    setLogoColor(color => (color === white ? yellow : white))
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
            <Logo className='logo' fill={logoColor} title='logo' />
          </Link>
          <nav>
            <Link to='/about'>Quebec3とは</Link>
          </nav>
        </div>
      </header>
      <main className={content}>{children}</main>
    </>
  )
}
