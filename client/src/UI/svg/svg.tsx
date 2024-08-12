import { forwardRef } from 'react'
import style from './svg.module.scss'
import classNames from 'classnames'
export interface SvgProps {
    name: string
    className?: string
}

const Svg = forwardRef<SVGSVGElement, SvgProps>(({ className, name }, ref) => {
    const cl = classNames(style.icon, className)
    return (
        <svg ref={ ref } className={ cl }>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
})

export default Svg