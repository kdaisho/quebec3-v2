import { card, profile, text } from 'src/components/Profile/profile.module.scss'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Profile() {
  return (
    <div className={card}>
      <StaticImage
        src='../../images/profile-circle-2022-02-opt.webp'
        alt='kyoshin'
        placeholder='blurred'
        className={profile}
      />
      <div className={text}>
        <p>このオッサンが怒ったり困ったりしたことをテキトーに書いてます。</p>
        <h2>Kyoshin</h2>
        <p>
          2010年よりモントリオール島在住のカナダ市民権保持者。
          陸上自衛隊に7年、現在カナダでSDE。 最近カレーの食べ過ぎで痛風になる。
        </p>
      </div>
    </div>
  )
}
