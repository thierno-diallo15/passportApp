import { useNotification as useNotificationContext } from '@/contexts/NotificationContext'

export const useNotification = () => {
  const { showNotification } = useNotificationContext()

  return {
    showSuccess: (message: string) => showNotification(message, 'success'),
    showError: (message: string) => showNotification(message, 'error'),
    showInfo: (message: string) => showNotification(message, 'info'),
  }
} 