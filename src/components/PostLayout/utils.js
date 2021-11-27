import React, { useEffect, useRef } from 'react'
import { IMG_PLACEHOLDER } from 'src/components/constants'

export const Hero = ({ cname, hero, title }) => {
  const el = useRef(null)

  useEffect(() => {
    const image = el.current
    const fullSrc = image.src
    image.src = IMG_PLACEHOLDER
    const fullImage = new Image()
    fullImage.src = fullSrc
    fullImage.onload = function () {
      image.src = fullSrc
      image.removeAttribute('placeholder')
    }
  }, [])

  return <img className={cname} src={hero} alt={title} ref={el} />
}

export const Tags = ({ tags, cname }) => (
  <ul className={cname}>
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
)
