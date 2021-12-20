import { LOGO } from 'src/components/constants'
import { Link } from 'gatsby'
import Logo from 'src/svg/Logo'
import React from 'react'
import { footer } from './footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={footer}>
      <div className='wrapper'>
        <Link to='/'>
          <Logo
            outline={LOGO.DEFAULT.outline}
            inner={LOGO.DEFAULT.inner}
            title='logo'
          />
        </Link>
        <p>- 海外移住ポータル -</p>
        <p>Copyright &#169; {year} Quebec3 - All rights reserved.</p>
      </div>
    </footer>
  )
}
