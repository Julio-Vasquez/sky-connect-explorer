import { toast, ToastOptions } from 'react-toastify'

export const notify = {
  success: (msg: string, options?: ToastOptions) => toast.success(msg, options),
  error: (msg: string, options?: ToastOptions) => toast.error(msg, options),
  info: (msg: string, options?: ToastOptions) => toast.info(msg, options),
  warn: (msg: string, options?: ToastOptions) => toast.warn(msg, options),
}
