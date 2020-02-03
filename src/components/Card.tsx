import React from 'react'

interface CardsProps {
    onClick: () => void
}

const Card: React.FC<CardsProps> = (props) => {
    return (
        <article className="Card" onClick={props.onClick}>
            {props.children}
        </article>
    )
}

export default Card
