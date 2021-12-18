import { NAVY, SIZE } from 'src/components/constants'
import { card, profile, text } from 'src/components/Profile/profile.module.scss'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Profile() {
  // Use inline as css is too slow to trim image; user can see it
  const style = {
    border: `3px solid ${NAVY}`,
    borderRadius: '50%',
    overflow: 'hidden',
    width: SIZE.PROFILE.WIDTH,
  }
  return (
    <aside>
      <div className={card}>
        <StaticImage
          src='../../images/profile-circle-opt.png'
          alt='kyoshin'
          placeholder='blurred'
          className={profile}
          style={style}
        />
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
