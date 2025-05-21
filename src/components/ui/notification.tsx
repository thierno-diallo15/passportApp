'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}

const Notification = ({ message, type, duration = 5000, onClose }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }[type]

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  }[type]

  return createPortal(
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div 
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 min-w-[300px] transform transition-all duration-300 ease-in-out hover:scale-105`}
      >
        <span className="text-xl">{icon}</span>
        <span className="flex-1">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false)
            onClose?.()
          }}
          className="ml-2 hover:text-gray-200 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  )
}

export default Notification 