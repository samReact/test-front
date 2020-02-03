import React from 'react'

interface ButtonProps {
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className="Button">
            {props.children}
        </button>
    )
}

export default Button
