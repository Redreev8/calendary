import { Children, forwardRef, ReactNode } from 'react'
import style from './list.module.scss'
import classNames from 'classnames'
interface ListProps {
    children: ReactNode
    className?: string
    isBorder?: boolean
    isBorderBottom?: boolean
    isRow?: boolean
}

const List = forwardRef<HTMLUListElement, ListProps>(
    ({ className = '', children, isBorder = false, isBorderBottom = false, isRow = false }, ref) => {
        const cl = classNames(style.list, className, {
            [style['list--row']]: isRow,
            [style['list--border']]: isBorder,
            [style['list--no-border-last']]: isBorderBottom
        })

        return (
            <ul ref={ ref } className={ cl }>
                {
                    Children.map(children, child => (
                        <li className={ style['list__item'] }>{ child }</li>
                    ))
                }
            </ul>
        )
})

export default List