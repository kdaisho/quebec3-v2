import { ITEMS_PER_PAGE } from 'src/components/constants'
import { Link } from 'gatsby'
import React from 'react'

export const Pagination = ({ totalCount }) => {
  const pageCount = Math.ceil(totalCount / ITEMS_PER_PAGE)
  const pages = Array.from(Array(pageCount).keys())

  return (
    <ul>
      {pages.map(page => {
        const to = page === 0 ? '/blogs' : `/blogs/${page + 1}`
        return (
          <li key={page} className={page}>
            <Link to={to}>{page + 1}</Link>
          </li>
        )
      })}
    </ul>
  )
}
