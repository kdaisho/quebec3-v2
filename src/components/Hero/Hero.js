import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { NAVY, SIZE, YELLOW } from 'src/components/constants'
import { Link } from 'gatsby'
import Logo from 'src/svg/Logo'
import React from 'react'
import { heroContainer } from './hero.module.scss'

export default function Hero({
  file,
  isHomepage = false,
  pageTitle = 'Quebec3',
  altText = 'quebec3',
}) {
  const image = getImage(file)
  return (
    <div className={heroContainer}>
      <div className='title-btn-container'>
        <div className='text'>
          <h1>
            <Logo outline={YELLOW} inner={NAVY} title='Quebec3' />
          </h1>
          <h2>{pageTitle}</h2>
        </div>
        {isHomepage && (
          <Link className='button-like' to='/blogs/1'>
            記事一覧
          </Link>
        )}
      </div>
      <GatsbyImage
        image={image}
        alt={altText}
        placeholder='blurred'
        layout='fullWidth'
        style={{
          minHeight: SIZE.HERO.MIN_HEIGHT,
          maxHeight: SIZE.HERO.MAX_HEIGHT,
        }}
      />
    </div>
  )
}
