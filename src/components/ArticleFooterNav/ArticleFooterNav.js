import React, { useState } from 'react'
import { WHITE, YELLOW } from 'src/components/constants'
import { isRight, link, nav } from './article-footer-nav.module.scss'
import ArrowLeft from 'src/svg/ArrowLeft'
import { Link } from 'gatsby'
import Subscription from 'src/components/Subscription'

export default function ArticleFooterNav({ toPrev, toNext }) {
  const [colorLeft, setColorLeft] = useState(WHITE)
  const [colorRight, setColorRight] = useState(WHITE)
  const title = '次の更新が気になる？新着記事お知らせサービスがあるだよ 🥳'

  return (
    <>
      <Subscription title={title} />
      <nav className={nav}>
        <Link
          className={link}
          disabled={toPrev === 'disabled' ? true : false}
          to={toPrev}
          onMouseEnter={() => setColorLeft(YELLOW)}
          onMouseLeave={() => setColorLeft(WHITE)}
        >
          <ArrowLeft color={colorLeft} /> 次の記事
        </Link>
        <Link
          className={`${link} ${isRight}`}
          disabled={toNext === 'disabled' ? true : false}
          to={toNext}
          onMouseEnter={() => setColorRight(YELLOW)}
          onMouseLeave={() => setColorRight(WHITE)}
        >
          前の記事 <ArrowLeft color={colorRight} />
        </Link>
      </nav>
    </>
  )
}
