import classNames from 'classnames'
import style from './container.module.scss'
import { Children, FC, ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
    width?: string
}

const Container: FC<ContainerProps> = ({ children, width='default', className }) => {
    const cl = classNames(
        style.container, 
        className, 
        style[`container--${width}`],
        Array.isArray(children) && style[`container--${children.length}`],
        {}
    )
    return (
        <div className={ cl }>
            {
                Children.map(children, child => (
                    <div className={ style['container__col'] }>{ child }</div>
                ))
            }
        </div>
    )
}

export default Container