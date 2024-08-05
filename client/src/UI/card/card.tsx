import { FC, ReactNode } from 'react'
import style from './card.module.scss'
import classNames from 'classnames'
interface CardProps {
    children: ReactNode
    className?: string
    href?: string
}

const box = {
    'link': ({children, ...props}: CardProps) => <a {...props}>{ children }</a>,
    'div': ({children, ...props}: CardProps) => <div {...props}>{ children }</div>
}

const Card: FC<CardProps> = ({ href, children, className }) => {
    const cl = classNames(style.card, className)
    const Componets = href ? box.link : box.div
    return (
        <Componets className={ cl }>
            {
                children
            }
        </Componets>
    )
}

export default Card