import React from 'react'
import { Link } from 'gatsby'
import { backToHome } from './backToHome.module.scss'

export default function BackToHome() {
  return (
    <Link className={backToHome} to='/'>
      &larr;　ホームへ戻る
    </Link>
  )
}
