import React from 'react'
import cn from 'classnames'
import { mainContent } from './main-content-wrapper.module.scss'

export default function MainContentWrapper({ classNameProp, children }) {
  return (
    <main className={cn(mainContent, { [classNameProp]: classNameProp })}>
      {children}
    </main>
  )
}
