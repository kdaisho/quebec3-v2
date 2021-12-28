import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { honeyField } from './subscribe-form.module.scss'
import showToast from 'src/components/Toast'

export default function SubscribeForm() {
  const initialBody = {
    email: '',
    honey: '',
  }
  const [body, setBody] = useState(initialBody)

  const handleChange = ({ target }) => {
    setBody({ ...body, [target.name]: target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (body.honey) {
      // I know, this is lame, hope it helps
      return null
    }
    // api returns 200 regardlessly, try & catch won't work here
    const { msg, result } = await addToMailchimp(body.email)
    // translation required for error message only
    const message =
      result === 'error'
        ? '登録に失敗しました。後でもう一度トライしてください。'
        : msg
    showToast({ message, kind: result })
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div id='mc_embed_signup_scroll'>
        <h2>新着記事お知らせサービス</h2>
        <div className='mc-field-group'>
          <label htmlFor='email-field'>メールアドレス</label>
          <input
            id='email-field'
            type='email'
            value={body.email}
            name='email'
            onChange={handleChange}
            required
          />
        </div>
        <div className={honeyField} aria-hidden='true'>
          <label htmlFor='address-field'>Address</label>
          <input
            id='address-field'
            type='text'
            onChange={handleChange}
            name='honey'
            tabIndex='-1'
            value={body.honey}
          />
        </div>
        <div>
          <input type='submit' value='Subscribe' />
        </div>
      </div>
    </form>
  )
}
