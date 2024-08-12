import { ReactNode, HtmlHTMLAttributes, forwardRef } from 'react'
import style from './text.module.scss'
import classNames from 'classnames'
interface TextProps extends  HtmlHTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
    isBig?: boolean
    className?: string
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ children, className, isBig = false, ...props }, ref) => {
    return (
        <p ref={ ref } className={ classNames(style.text, className, { [style[style['text--big']]]: isBig }) } { ...props }>
            { children }
        </p>
    )
})

export default Text