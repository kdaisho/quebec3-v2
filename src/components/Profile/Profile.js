import { card, profile, text } from 'src/components/Profile/profile.module.scss'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Profile() {
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
    </aside>
  )
}
