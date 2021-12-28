import React, { useState } from 'react'
import {
  card,
  isNewsletter,
  profile,
  text,
} from 'src/components/Profile/profile.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import SubscribeForm from 'src/components/SubscribeForm'

export default function Profile() {
  const [showSubscription, setShowSubscription] = useState(false)

  return (
    <aside>
      <div className={card}>
        <StaticImage
          src='../../images/profile-circle-opt.png'
          alt='kyoshin'
          placeholder='blurred'
          className={profile}
        />
        <div className={text}>
          <p>性格悪そーなこの人が書いてます。</p>
          <h2>Kyoshin</h2>
          <p>
            2010年よりモントリオール島在住のカナダ市民権保持者。
            元陸上自衛官で現在はWeb屋。 カレー好き。
          </p>
        </div>
      </div>
      <div className={`${card} ${isNewsletter}`}>
        <h3>記事更新通知サービス</h3>
        <button onClick={() => setShowSubscription(true)}>
          手続方法について
        </button>
      </div>
      {showSubscription && (
        <SubscribeForm setShowSubscription={setShowSubscription} />
      )}
    </aside>
  )
}
