import { FC, ReactNode } from 'react'
import style from './title.module.scss'
import classNames from 'classnames'
interface TitleProps {
    children: ReactNode
    level?: number
    className?: string
}

interface Levels {
    [key: number]: FC<Omit<TitleProps, 'level'>>
}

const levels: Levels = {
    1: ({ children, ...props }) => <h1 { ...props }>{ children }</h1>,
    2: ({ children, ...props }) => <h2 { ...props }>{ children }</h2>,
    3: ({ children, ...props }) => <h3 { ...props }>{ children }</h3>,
    4: ({ children, ...props }) => <h4 { ...props }>{ children }</h4>,
    5: ({ children, ...props }) => <h5 { ...props }>{ children }</h5>,
}

const Title: FC<TitleProps> = ({ className, level=2, children }) => {
    const cl = classNames(style.title, className, style[`title--${levels}`])
    const Componet = levels[level]
    return <Componet className={ cl }>
        { children }
    </Componet>
}

export default Title