import { forwardRef, ReactNode } from 'react'
import style from './tag.module.scss'
import classNames from 'classnames'
interface TagProps {
    children: ReactNode
    className?: string
}

const Tag = forwardRef<HTMLHeadingElement, TagProps>(({ children, className }, ref) => {
    const cl = classNames(style.tag, className)
    return (
        <span ref={ ref } className={ cl }>
            { children }
        </span>
    )
})

export default Tag