import React, { useState } from 'react'
import {
  backdrop,
  container,
  hamburger,
  header,
  menuButton,
} from './header.module.scss'
import { LOGO } from 'src/components/constants'
import { Link } from 'gatsby'
import Logo from 'src/svg/Logo'
import { PATH } from 'src/components/constants'
import cn from 'classnames'
import menuItems from './menu-items'

export default function Header() {
  const [logoColor, setLogoColor] = useState(LOGO.DEFAULT)
  const [menuExpanded, setMenuExpanded] = useState(false)
  const isBrowser = typeof window !== 'undefined'

  const isCurrentPage = path => {
    return isBrowser ? window.location.pathname === path : false
  }

  return (
    <>
      <header
        className={header}
        data-host-location={window.parent?.location}
        data-host-location-origin={window.parent?.location?.origin}
        data-current-location={window.location}
      >
        <div className={container}>
          <Link
            to={PATH.HOME}
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
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn({ 'is-active': isCurrentPage(item.path) })}
                onClick={() => setMenuExpanded(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <button
          className={menuButton}
          onClick={() => setMenuExpanded(ex => !ex)}
        >
          <div className={cn({ 'is-expanded': menuExpanded }, hamburger)}>
            <div className='hamburger-box'>
              <div className='hamburger-inner'></div>
            </div>
          </div>
        </button>
      </header>
      {menuExpanded && (
        <div className={backdrop} onClick={() => setMenuExpanded(false)}></div>
      )}
    </>
  )
}
