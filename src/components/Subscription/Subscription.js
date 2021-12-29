import React, { useState } from 'react'
import { card, isNewsletter } from './subscription.module.scss'
import SubscriptionForm from 'src/components/SubscriptionForm'

export default function Subscription({ title = '記事更新通知サービス' }) {
  const [showSubscription, setShowSubscription] = useState(false)

  return (
    <>
      <div className={`${card} ${isNewsletter}`}>
        <h3>{title}</h3>
        <button onClick={() => setShowSubscription(true)}>
          登録方法について
        </button>
      </div>
      {showSubscription && (
        <SubscriptionForm setShowSubscription={setShowSubscription} />
      )}
    </>
  )
}
