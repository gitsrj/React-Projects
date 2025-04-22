import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custom App ! SRJ</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google.'
// }


const anotherUser = "sahil"

const ReactElement = React.createElement(
    'a', 
    {href: "https://google.com", target: '_blank'},
    'Click me to visit Google',
    anotherUser       // evaluated expression
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)



createRoot(document.getElementById('root')).render(
    ReactElement
)
