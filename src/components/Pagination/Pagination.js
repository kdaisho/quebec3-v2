import React, { useState } from 'react'
import { WHITE, YELLOW } from 'src/components/constants'
import { isRight, link, pagination } from './pagination.module.scss'
import ArrowLeft from 'src/svg/ArrowLeft'
import { ITEMS_PER_PAGE } from 'src/components/constants'
import { Link } from 'gatsby'

export default function Pagination({ totalCount, currentPage }) {
  const [colorLeft, setColorLeft] = useState(WHITE)
  const [colorRight, setColorRight] = useState(WHITE)

  const pageCount = Math.ceil(totalCount / ITEMS_PER_PAGE)
  const prev = currentPage - 1
  const next = currentPage + 1

  return (
    <nav className={pagination}>
      <Link
        className={link}
        disabled={prev <= 0 ? true : false}
        to={`/blogs/${prev}`}
        onMouseEnter={() => setColorLeft(YELLOW)}
        onMouseLeave={() => setColorLeft(WHITE)}
      >
        <ArrowLeft color={colorLeft} /> 前へ
      </Link>
      <span>
        ページ {currentPage} / {pageCount}
      </span>
      <Link
        className={`${link} ${isRight}`}
        disabled={next >= pageCount + 1 ? true : false}
        to={`/blogs/${next}`}
        onMouseEnter={() => setColorRight(YELLOW)}
        onMouseLeave={() => setColorRight(WHITE)}
      >
        次へ <ArrowLeft color={colorRight} />
      </Link>
    </nav>
  )
}
