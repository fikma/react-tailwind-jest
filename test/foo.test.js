import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import App from '../src/App'

describe('App test', () => {
    it("should contains the heading 1", () => {
        render(<App />)
        const heading = screen.getByText(/Hello world/i)
        expect(heading).toBeInTheDocument()
    })
})