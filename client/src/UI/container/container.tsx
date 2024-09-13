import classNames from 'classnames'
import style from './container.module.scss'
import { Children, FC, ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
    width?: string
    pg?: ('xl' | 'lg' | 'bg' | 'g' | 'md' | 'sm' | 'xs' | 'tiny')[]
}

const Container: FC<ContainerProps> = ({ children, width='default', pg=[], className }) => {
    const cl = classNames(
        style.container, 
        className, 
        style[`container--${width}`],
        Array.isArray(children) && style[`container--${children.length}`],
    )
    
    return (
        <div className={ cl }>
            {
                Children.map(children, (child, i) => (
                    <div 
                        className={ classNames(style['container__col'], style[`container__col--p-${pg[i] ?? 'g'}`],) }
                    >{ child }</div>
                ))
            }
        </div>
    )
}

export default Container