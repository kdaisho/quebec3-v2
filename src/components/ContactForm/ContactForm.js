import React, { useRef, useState } from 'react'
import { field, form } from './contact-form.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'
import showToast from 'src/components/Toast'

export default function ContactForm() {
  const initialBody = {
    name: '',
    email: '',
    message: '',
  }
  const [body, setBody] = useState(initialBody)
  const reCaptchaRef = useRef()

  const handleChange = ({ target }) => {
    setBody({ ...body, [target.name]: target.value })
  }

  const domain =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9000'
      : // : 'https://daishodesign.com'
        'https://quebec3.com'

  const handleSubmit = async event => {
    event.preventDefault()
    const token = await reCaptchaRef.current.executeAsync()
    console.log('============ recqptcha token', token)
    if (!token) return null
    reCaptchaRef.current.reset()
    const { name, email, message } = body

    try {
      const response = await fetch(`${domain}/send`, {
        method: 'POST',
        // mode: 'same-origin',
        // mode: 'cors',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          token,
        }),
      })
      const { text, kind } = await response.json()
      showToast({ message: text, kind })
      setBody(initialBody)
    } catch (err) {
      showToast({ message: '送信失敗。本文が長すぎるのかも。', kind: 'error' })
    }
  }

  return (
    <form className={form} onSubmit={handleSubmit} autoComplete='off'>
      <p>
        *メール欄は、返信先を記載せず一方的に質問を送ってくるおっちょこちょいのために設けています。管理人からの返事を期待しない君は適当なアドレスをでっちあげとけ。
      </p>
      <div className={field}>
        <label htmlFor='name'>名前</label>
        <input
          type='text'
          id='name'
          name='name'
          value={body.name}
          onChange={handleChange}
          placeholder='名無しさん'
          maxLength='45'
          pattern='.*\S+.*'
          required
        />
      </div>
      <div className={field}>
        <label htmlFor='email'>メール*</label>
        <input
          type='email'
          id='email'
          name='email'
          value={body.email}
          onChange={handleChange}
          placeholder='example@gmail.com'
          maxLength='45'
          pattern='.*\S+.*'
          required
        />
      </div>
      <div className={field}>
        <label htmlFor='message'>メッセージ</label>
        <textarea
          id='message'
          name='message'
          value={body.message}
          rows='10'
          onChange={handleChange}
          maxLength='2500'
          placeholder='最大2500文字です。'
          required
        />
      </div>
      <ReCAPTCHA
        // sitekey='6Lc7kkkcAAAAAEin0TkCgCe0UlZzUPcLsvRDanPr'
        sitekey='6Ld2E8gdAAAAAA-_fAfI8AgdSocYMKhsf4DfZf5h'
        size='invisible'
        ref={reCaptchaRef}
      />
      <button type='submit' className='submit'>
        Submit
      </button>
    </form>
  )
}
