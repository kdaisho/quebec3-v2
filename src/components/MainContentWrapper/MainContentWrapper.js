import React from 'react'
import { mainContent } from './main-content-wrapper.module.scss'

export default function MainContentWrapper({ children }) {
  return <main className={mainContent}>{children}</main>
}
