import React from 'react'
import { Link } from 'gatsby'
import Layout from 'src/components/Layout'
import { profile } from 'src/styles/index.module.scss'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello from QC3</h1>
      <div className={profile}>
        <img
          src='https://res.cloudinary.com/de9x7yfyb/image/upload/c_scale,w_250/v1637543915/samples/qc3/profile/2021-profile-bright-opt_alp6vj.jpg'
          alt='Kyoshin'
        />
      </div>
      <Link to='/about'>About</Link>
    </Layout>
  )
}
