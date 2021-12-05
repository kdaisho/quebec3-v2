import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // TODO: Handle these three values within a single function

  const handleSendMessage = async e => {
    e.preventDefault()
    const url = 'http://localhost:3000/send' // TODO: create own service (node + express )

    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
      // TODO: Set a toast message
    } catch (err) {
      // TODO: Set a toast message
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
      <button type='submit' onClick={handleSendMessage}>
        Submit
      </button>
    </form>
  )
}
