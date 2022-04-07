import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './components/heading'
import Paragraph from './components/paragraph'
import './index.css'
import './index.scss'
import logo from './img.png'

function App() {
    return (
        <>
            <Heading></Heading>
            <img src={logo}></img>
            <Paragraph></Paragraph>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
