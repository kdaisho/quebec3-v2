import { LOGO } from 'src/components/constants'
import Logo from 'src/images/Logo'
import { footer } from './footer.module.scss'
import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={footer}>
      <div className='wrapper'>
        <Logo
          outline={LOGO.DEFAULT.outline}
          inner={LOGO.DEFAULT.inner}
          title='logo'
        />
        <p>- 海外移住ポータル -</p>
        <p>Copyright &#169; {year} Quebec3 - All rights reserved.</p>
      </div>
    </footer>
  )
}
