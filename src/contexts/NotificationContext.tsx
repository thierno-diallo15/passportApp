'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import Notification from '@/components/ui/notification'

interface NotificationContextType {
  showNotification: (message: string, type: 'success' | 'error' | 'info') => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
  } | null>(null)

  const showNotification = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type })
  }, [])

  const handleClose = useCallback(() => {
    setNotification(null)
  }, [])

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleClose}
        />
      )}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
} 