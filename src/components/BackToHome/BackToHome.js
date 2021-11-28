import ArrowLeft from 'src/images/ArrowLeft'
import { Link } from 'gatsby'
import React from 'react'
import { backToHome } from './backToHome.module.scss'

export default function BackToHome({ onMouseEnter, onMouseLeave, color }) {
  return (
    <Link
      className={backToHome}
      to='/'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ArrowLeft color={color} />
      　ホームへ戻る
    </Link>
  )
}
