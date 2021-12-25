import React, { useState } from 'react'
import { container, hamburger, header, menuButton } from './header.module.scss'
import { LOGO } from 'src/components/constants'
import { Link } from 'gatsby'
import Logo from 'src/svg/Logo'
import cn from 'classnames'

export default function Header() {
  const [logoColor, setLogoColor] = useState(LOGO.DEFAULT)
  const [menuExpanded, setMenuExpanded] = useState(false)

  return (
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

        <nav className={cn({ expanded: menuExpanded })}>
          <Link to='/'>ホーム</Link>
          <Link to='/blogs/1'>記事一覧</Link>
          <Link to='/about'>Quebec3について</Link>
          <Link to='/contact'>接触を試みる</Link>
        </nav>
      </div>
      <button className={menuButton} onClick={() => setMenuExpanded(ex => !ex)}>
        <div className={cn({ 'is-active': menuExpanded }, hamburger)}>
          <div className='hamburger-box'>
            <div className='hamburger-inner'></div>
          </div>
        </div>
      </button>
    </header>
  )
}
