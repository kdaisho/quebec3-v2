import React, { useState } from 'react'
import {
  backdrop,
  field,
  form,
  honeyField,
  notification,
} from './subscription-form.module.scss'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import showToast from 'src/components/Toast'

export default function SubscriptionForm({ setShowSubscription }) {
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
      // mc doesn't accept reCaptcha, hope this helps
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
    <>
      <form className={form} onSubmit={handleSubmit} autoComplete='off'>
        <button
          type='button'
          className='close-modal'
          onClick={() => setShowSubscription(false)}
        >
          &#10005;
        </button>
        <h2>新着記事お知らせサービス</h2>
        <p>
          ここからメアドを登録することにより新着記事のお知らせが届くようになります。
        </p>
        <p>
          Quebec3は管理人の気まぐれに完全に頼り切っているため「年に数回程度」しか更新しないブログ界の絶滅危惧種です。忘却を防ぐためにも登録しましょう。
        </p>
        <p className={notification}>
          届いたメールに記載されたリンクをクリックすることでいつでも登録を解除できます。
        </p>
        <div className={field}>
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
        <button type='submit' className='submit'>
          送信
        </button>
      </form>
      <div
        className={backdrop}
        onClick={() => setShowSubscription(false)}
      ></div>
    </>
  )
}
