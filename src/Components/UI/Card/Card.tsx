import React from 'react'
import './Card.css'
interface ICardProps{
    children: any,
    className: string
}

class Card extends React.Component<ICardProps>{
    public render(): JSX.Element{
        return <div className={`card ${this.props.className}`}>{this.props.children}</div>
    }
}

export default Card;