import { forwardRef, ReactNode } from 'react'
import style from './scroll-shadow.module.scss'
import classNames from 'classnames'
import useScrollShadow from './useScroll'
interface ScrollShadowProps {
    children: ReactNode
    className?: string
}

interface ScrollShadowRef {
    wrapp: HTMLDivElement | null
    scroll: HTMLDivElement | null
}

const ScrollShadow = forwardRef<ScrollShadowRef, ScrollShadowProps>(({ children, className }, ref) => {
    const cl = classNames(style['scroll-shadow'], className)
    const { handelScroll, refScrooll, styleHorizont, styleVerticale } = useScrollShadow()
    return (
        <div ref={ node => {
                if (!node || !ref) return
                if (typeof ref === 'function') return
                ref.current!.wrapp = node
            }} className={ cl }
        >
            <div style={ styleHorizont } className={ style['scroll-shadow__horizont'] }>
                <div 
                    ref={ node => {
                        if (!node || !ref) return
                        if (typeof ref === 'function') return
                        refScrooll.current = node
                        ref.current!.scroll = node
                    } }
                    onScroll={ handelScroll }
                    style={ styleVerticale } className={  style['scroll-shadow__wrapp'] }
                >
                    { children }
                </div>
            </div>
        </div>
    )
})

export default ScrollShadow