import React from 'react'

export const Hero = ({ cname, hero, title }) => (
  <img className={cname} src={hero} alt={title} />
)

export const Tags = ({ tags, cname }) => (
  <ul className={cname}>
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
)
