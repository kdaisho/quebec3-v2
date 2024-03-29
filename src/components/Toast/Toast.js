import React, { useEffect, useMemo } from 'react'
import { DURATION } from './constants'
import { toast } from './toast.module.scss'

const Toast = ({ message, kind, _duration }) => {
  const timeoutIds = useMemo(() => [], [])

  useEffect(() => {
    const toastElements = document.getElementsByClassName('toast-container')
    timeoutIds.push(
      window.setTimeout(() => {
        toastElements[0].remove()
      }, _duration || DURATION)
    )

    return () => {
      while (timeoutIds.length) {
        clearTimeout(timeoutIds.shift())
      }
    }
  }, [_duration, timeoutIds])

  return <div className={`${toast} ${kind}`}>{message}</div>
}

export default Toast
