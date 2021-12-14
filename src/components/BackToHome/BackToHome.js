import React, { useState } from 'react'
import { WHITE, YELLOW } from 'src/components/constants'
import ArrowLeft from 'src/svg/ArrowLeft'
import { Link } from 'gatsby'
import { backTo } from './back-to-home.module.scss'

export default function BackToHome({ destination, text }) {
  const [color, setColor] = useState(WHITE)

  return (
    <Link
      className={backTo}
      to={destination}
      onMouseEnter={() => setColor(YELLOW)}
      onMouseLeave={() => setColor(WHITE)}
    >
      <ArrowLeft color={color} />
      {text}
    </Link>
  )
}
