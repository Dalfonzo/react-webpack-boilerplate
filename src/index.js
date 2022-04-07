import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
    return <h1>React boilerplate using webpack</h1>
}

createRoot(document.querySelector('#root')).render(<App />)
