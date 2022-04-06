import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './components/heading'
import Paragraph from './components/paragraph'
import './index.css'
import './index.scss'

function App() {
    return (
        <>
            <Heading></Heading>
            <Paragraph></Paragraph>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
