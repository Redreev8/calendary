import { forwardRef, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'
import style from './title.module.scss'
import classNames from 'classnames'
interface TitleProps {
    children: ReactNode
    level?: number
    className?: string
}

interface Levels {
    [key: number]: ForwardRefExoticComponent<Omit<TitleProps, 'level'> & RefAttributes<HTMLHeadingElement>>
}

const levels: Levels = {
    1: forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => <h1 ref={ ref } { ...props }>{ children }</h1>),
    2: forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => <h2 ref={ ref } { ...props }>{ children }</h2>),
    3: forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => <h3 ref={ ref } { ...props }>{ children }</h3>),
    4: forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => <h4 ref={ ref } { ...props }>{ children }</h4>),
    5: forwardRef<HTMLHeadingElement, TitleProps>(({ children, ...props }, ref) => <h5 ref={ ref } { ...props }>{ children }</h5>),
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ className, level=2, children }, ref) => {
    const cl = classNames(style.title, className, style[`title--${levels}`])
    const Componet = levels[level]
    return <Componet ref={ ref } className={ cl }>
        { children }
    </Componet>
})

export default Title