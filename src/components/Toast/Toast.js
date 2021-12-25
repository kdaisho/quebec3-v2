import React, { useEffect, useMemo } from 'react'
import { DURATION } from './constants'
import { toast } from './toast.module.scss'

const Toast = ({ message, kind }) => {
  const timeoutIds = useMemo(() => [], [])

  useEffect(() => {
    const toastElements = document.getElementsByClassName('toast-container')
    timeoutIds.push(
      window.setTimeout(() => {
        toastElements[0].remove()
      }, DURATION)
    )

    return () => {
      while (timeoutIds.length) {
        clearTimeout(timeoutIds.shift())
      }
    }
  }, [timeoutIds])

  return <div className={`${toast} ${kind}`}>{message}</div>
}

export default Toast
