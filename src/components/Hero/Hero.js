import { Link } from 'gatsby'
import Logo from 'src/svg/Logo'
import React from 'react'
import { SIZE } from 'src/components/constants'
import { StaticImage } from 'gatsby-plugin-image'
import { heroContainer } from './hero.module.scss'

export default function Hero() {
  return (
    <section style={{ position: 'relative' }}>
      <div className={heroContainer}>
        <div className='title-btn-container'>
          <div className='text'>
            <h1>
              <Logo outline={'#ffca28'} inner={'#000'} title='Quebec3' />
            </h1>
            <h2>- 海外移住ポータル -</h2>
          </div>
          <Link className='button-like' to='/blogs/1'>
            記事一覧
          </Link>
        </div>
        <StaticImage
          src='../images/quebec3-cat-opt.jpg'
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
    </section>
  )
}
