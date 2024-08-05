import { FC, ReactNode } from 'react'
import style from './scroll-shadow.module.scss'
import classNames from 'classnames'
import useScrollShadow from './useScroll'
interface ScrollShadowInterface {
    children: ReactNode
    className?: string
}

const ScrollShadow: FC<ScrollShadowInterface> = ({ children, className }) => {
    const cl = classNames(style['scroll-shadow'], className)
    const { handelScroll, ref, styleHorizont, styleVerticale } = useScrollShadow()
    return (
        <div className={ cl }>
            <div style={ styleHorizont } className={ style['scroll-shadow__horizont'] }>
                <div ref={ ref }  onScroll={handelScroll} style={ styleVerticale } className={  style['scroll-shadow__wrapp'] }>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default ScrollShadow