import { card, profile, text } from 'src/components/Profile/profile.module.scss'
import React from 'react'
import { SIZE } from 'src/components/constants'
import { StaticImage } from 'gatsby-plugin-image'

export default function Profile() {
  return (
    <aside>
      <div className={card}>
        <div className={profile}>
          <StaticImage
            src='../../images/profile-opt.jpg'
            alt='kyoshin'
            placeholder='blurred'
            style={{ width: SIZE.PROFILE.WIDTH }}
          />
        </div>
        <div className={text}>
          <p>性格悪そーなこの人が書いてます。</p>
          <h2>Kyoshin</h2>
          <p>
            2010年よりモントリオール在住のカナダ市民権保持者。
            元陸上自衛官のWeb屋。 カレー好き。
          </p>
        </div>
      </div>
    </aside>
  )
}
