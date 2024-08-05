import { FC, ReactNode } from 'react'
import style from './tag.module.scss'
import classNames from 'classnames'
interface TagInterface {
    children: ReactNode
    className?: string
}

const Tag: FC<TagInterface> = ({ children, className }) => {
    const cl = classNames(style.tag, className)
    return (
        <span className={ cl }>
            { children }
        </span>
    )
}

export default Tag