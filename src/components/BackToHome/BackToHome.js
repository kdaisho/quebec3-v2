import { PRIMARY, YELLOW } from 'src/components/constants'
import React, { useState } from 'react'
import ArrowLeft from 'src/svg/ArrowLeft'
import { Link } from 'gatsby'
import { backTo } from './backToHome.module.scss'

export default function BackToHome({ destination, text }) {
  const [color, setColor] = useState(PRIMARY)

  return (
    <Link
      className={backTo}
      to={destination}
      onMouseEnter={() => setColor(YELLOW)}
      onMouseLeave={() => setColor(PRIMARY)}
    >
      <ArrowLeft color={color} />
      {text}
    </Link>
  )
}
