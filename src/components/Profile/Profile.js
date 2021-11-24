import React from 'react'
import { profile } from 'src/components/Profile/profile.module.scss'

export default function Profile() {
  return (
    <div className={`right ${profile}`}>
      <img
        src='https://res.cloudinary.com/de9x7yfyb/image/upload/c_scale,e_brightness:10,q_auto,r_0,w_200/v1637735204/qc3/2021-profile-crop-opt_x0qdi1.jpg'
        alt='Kyoshin'
      />
    </div>
  )
}
