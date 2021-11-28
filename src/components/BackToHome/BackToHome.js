import { PRIMARY, YELLOW } from 'src/components/constants'
import React, { useState } from 'react'
import ArrowLeft from 'src/images/ArrowLeft'
import { Link } from 'gatsby'
import { backToHome } from './backToHome.module.scss'

export default function BackToHome() {
  const [color, setColor] = useState(PRIMARY)

  return (
    <Link
      className={backToHome}
      to='/'
      onMouseEnter={() => setColor(YELLOW)}
      onMouseLeave={() => setColor(PRIMARY)}
    >
      <ArrowLeft color={color} />
      　ホームへ戻る
    </Link>
  )
}
