import React from 'react'
import ReactDOM from 'react-dom'

import './styles/main.scss'

import App from './App'

const MOUNT_POINT = document.getElementById('root')

const render = () => {
    if (MOUNT_POINT) {
        ReactDOM.render(<App />, MOUNT_POINT)
    } else {
        console.error('Mount Point: ' + MOUNT_POINT + ' does not exist.')
    }
}

render()
