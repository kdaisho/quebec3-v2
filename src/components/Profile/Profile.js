import React from 'react'
import { profile, card, text } from 'src/components/Profile/profile.module.scss'

export default function Profile() {
  return (
    <aside>
      <div className={card}>
        <div className={profile}>
          <img
            src='https://res.cloudinary.com/de9x7yfyb/image/upload/c_scale,e_brightness:10,q_auto,r_0,w_200/v1637735204/qc3/2021-profile-crop-opt_x0qdi1.jpg'
            alt='Kyoshin'
          />
        </div>
        <div className={text}>
          <p>この人が書いてます。</p>
          <h2>Kyoshin</h2>
          <p>
            2010年よりモントリオール在住のカナダ市民権保持者。
            元陸自で現在Web屋。 カレー好き。
          </p>
        </div>
      </div>
    </aside>
  )
}
