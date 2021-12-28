import React, { useState } from 'react'
import { card, isNewsletter } from './aside.module.scss'
import Profile from 'src/components/Profile'
import SubscriptionForm from 'src/components/SubscriptionForm'

export default function Aside() {
  const [showSubscription, setShowSubscription] = useState(false)

  return (
    <aside>
      <Profile />
      <div className={`${card} ${isNewsletter}`}>
        <h3>記事更新通知サービス</h3>
        <button onClick={() => setShowSubscription(true)}>
          手続方法について
        </button>
      </div>
      {showSubscription && (
        <SubscriptionForm setShowSubscription={setShowSubscription} />
      )}
    </aside>
  )
}
