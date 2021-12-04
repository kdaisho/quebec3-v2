import { PRIMARY, YELLOW } from 'src/components/constants'
import React, { useState } from 'react'
import { isRight, link, nav } from './articleFooterNav.module.scss'
import ArrowLeft from 'src/svg/ArrowLeft'
import { Link } from 'gatsby'

export default function ArticleFooterNav({ toPrev, toNext }) {
  const [colorLeft, setColorLeft] = useState(PRIMARY)
  const [colorRight, setColorRight] = useState(PRIMARY)

  return (
    <nav className={nav}>
      <Link
        className={link}
        disabled={toPrev === 'disabled' ? true : false}
        to={toPrev}
        onMouseEnter={() => setColorLeft(YELLOW)}
        onMouseLeave={() => setColorLeft(PRIMARY)}
      >
        <ArrowLeft color={colorLeft} /> 前の記事
      </Link>
      <Link
        className={`${link} ${isRight}`}
        disabled={toNext === 'disabled' ? true : false}
        to={toNext}
        onMouseEnter={() => setColorRight(YELLOW)}
        onMouseLeave={() => setColorRight(PRIMARY)}
      >
        次の記事 <ArrowLeft color={colorRight} />
      </Link>
    </nav>
  )
}
