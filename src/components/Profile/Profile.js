import { card, profile, text } from 'src/components/Profile/profile.module.scss'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Profile() {
  return (
    <div className={card}>
      <StaticImage
        src='../../images/profile-circle-2022-opt.png'
        alt='kyoshin'
        placeholder='blurred'
        className={profile}
      />
      <div className={text}>
        <p>
          性格悪いそうなこの人は大変な事を書く。日本語を書くことに凝っている。宜しけれ。疑い。（integration悪い。）
        </p>
        <h2>Kyoshin</h2>
        <p>
          2010年よりモントリオール島在住のカナダ市民権保持者。
          陸上自衛隊に7年、現在カナダでSoftware Engineer。
          カレーを目に入れるの好き。
        </p>
      </div>
    </div>
  )
}
