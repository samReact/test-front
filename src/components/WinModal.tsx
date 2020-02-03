import React from 'react'

import bravo from '../assets/bravo.gif'

interface WinModalProps {
    click: number
    time: number
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const WinModal: React.FC<WinModalProps> = (props) => {
    const time = `${props.time / 60 < 10 ? `0${(props.time / 60).toFixed(0)}` : (props.time / 60).toFixed(0)}:${
        props.time % 60 < 10 ? `0${(props.time % 60).toFixed(0)}` : (props.time % 60).toFixed(0)
    }`

    return (
        <div id="overlay" className="Modal overlay" onClick={() => props.setModal(false)}>
            <div className="ModalContent">
                <h4>You did it!</h4>
                <img src={bravo} alt="bravo" />
                <p>
                    {props.click / 2} clics - {time}
                </p>
            </div>
        </div>
    )
}

export default WinModal
