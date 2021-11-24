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
  maxWidth = '1380px',
}) {
  const white = '#fff'
  const navy = '#021f37'
  const [logoColor, setLogoColor] = useState(navy)

  const handleOnHover = () => {
    setLogoColor(color => (color === navy ? white : navy))
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
            <Link to='/about'>Quebec3について</Link>
          </nav>
        </div>
      </header>
      <main className={content} style={{ maxWidth }}>
        {children}
      </main>
    </>
  )
}
