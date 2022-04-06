import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './heading'
import Paragraph from './paragraph'

function App() {
    return (
        <>
            <Heading></Heading>
            <Paragraph></Paragraph>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
