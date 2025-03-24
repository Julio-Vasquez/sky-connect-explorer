'use client'

import 'react-toastify/dist/ReactToastify.css'

import type { FC } from 'react'
import { ToastContainer } from 'react-toastify'

/**
 * @file ClientSideToastContainer component
 * @description
 * Wraps the `ToastContainer` from `react-toastify` to handle client-side toast notifications.
 * This component ensures toast rendering only occurs on the client side using the `'use client'` directive.
 * Auto-closes toasts after 3 seconds by default.
 *
 * @component
 *
 * @returns {JSX.Element} Toast container configured for client-side usage.
 *
 * @example
 * // Import and include it once in your layout or main component
 * import ClientSideToastContainer from '@components/atoms/ClientSideToastContainer'
 *
 * <ClientSideToastContainer />
 */

export const ClientSideToastContainer: FC = () => <ToastContainer autoClose={3000} />

export default ClientSideToastContainer
