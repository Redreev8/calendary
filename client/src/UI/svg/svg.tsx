import { FC } from 'react'
import style from './svg.module.scss'
import classNames from 'classnames'
export interface SvgInterface {
    name: string
    className?: string
}

const Svg: FC<SvgInterface> = ({ className, name }) => {
    const cl = classNames(style.icon, className)
    return (
        <svg className={ cl }>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}

export default Svg