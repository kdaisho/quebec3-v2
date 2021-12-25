import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import showToast from 'src/components/Toast'
import './contact-form.module.scss'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const reCaptchaRef = useRef()

  const handleSendMessage = async e => {
    e.preventDefault()
    const url = 'http://localhost:9000/send'
    const token = await reCaptchaRef.current.executeAsync()
    reCaptchaRef.current.reset()

    try {
      const response = await fetch(url, {
        method: 'POST',
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
    } catch (err) {
      showToast({ message: '送信失敗。本文が長すぎるのかも。', kind: 'error' })
    }
  }

  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        onChange={e => setName(e.target.value)}
        placeholder='Your name..'
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        id='email'
        name='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Your email'
      />
      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        name='message'
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder='Write something..'
      />
      <ReCAPTCHA
        sitekey='6Ld2E8gdAAAAAA-_fAfI8AgdSocYMKhsf4DfZf5h'
        size='invisible'
        ref={reCaptchaRef}
      />
      <button type='submit' onClick={handleSendMessage}>
        Submit
      </button>
    </form>
  )
}
