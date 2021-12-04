import React, { useState } from 'react'
import { container, header } from './header.module.scss'
import { LOGO } from 'src/components/constants'
import { Link } from 'gatsby'
import Logo from 'src/svg/Logo'

export default function Header() {
  const [logoColor, setLogoColor] = useState(LOGO.DEFAULT)

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
        <nav>
          <Link to='/'>ホーム</Link>
          <Link to='/blogs/1'>記事一覧</Link>
          <Link to='/about'>Quebec3について</Link>
        </nav>
      </div>
    </header>
  )
}
