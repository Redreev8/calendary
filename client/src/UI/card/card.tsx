import { forwardRef, LegacyRef, ReactNode } from 'react'
import style from './card.module.scss'
import classNames from 'classnames'
interface CardProps {
    children: ReactNode
    className?: string
    href?: string
}

const Link = forwardRef<HTMLAnchorElement, CardProps>(({children, ...props}, ref) => <a ref={ ref } {...props}>{ children }</a>)
const Div = forwardRef<HTMLDivElement, CardProps>(({children, ...props}, ref) => <div ref={ ref } {...props}>{ children }</div>)

const Card = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>(({ href, children, className }, ref) => {
    const cl = classNames(style.card, className)
    if (href !== undefined) {
        return <Link ref={ ref as LegacyRef<HTMLAnchorElement> | undefined } href={ href } className={ cl }> { children } </Link>
    }
    return <Div ref={ ref as LegacyRef<HTMLDivElement> | undefined } className={ cl }> { children } </Div>
})

export default Card