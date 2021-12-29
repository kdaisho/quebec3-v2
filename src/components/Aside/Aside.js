import Profile from 'src/components/Profile'
import React from 'react'
import Subscription from 'src/components/Subscription'
import { aside } from './aside.module.scss'

export default function Aside() {
  return (
    <aside className={aside}>
      <Profile />
      <Subscription title={'記事更新通知サービス'} />
    </aside>
  )
}
