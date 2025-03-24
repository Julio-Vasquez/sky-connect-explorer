import { toast } from 'react-toastify'
import { render, screen } from '@testing-library/react'

import ClientSideToastContainer from '@components/atoms/ClientSideToastContainer'

/**
 * @file Tests for the ClientSideToastContainer component.
 * @description Verifies that the toast container renders and displays toast notifications correctly.
 */

describe('ClientSideToastContainer', () => {
  test('should render ToastContainer and display toast', async () => {
    render(<ClientSideToastContainer />)

    toast.success('Operación exitosa')

    const notification = await screen.findByText('Operación exitosa')
    expect(notification).toBeInTheDocument()
  })
})
