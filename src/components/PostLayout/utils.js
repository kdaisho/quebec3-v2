import React from 'react'

export const Tags = ({ tags, cname }) => (
  <ul className={cname}>
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
)
