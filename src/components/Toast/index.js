import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './Toast'
import './toast.module.scss'

export default function showToast({ message, kind, duration }) {
  const div = document.createElement('div')
  div.className = 'toast-container'
  ReactDOM.render(
    <Toast message={message} kind={kind} _duration={duration} />,
    document.body.appendChild(div)
  )
}
