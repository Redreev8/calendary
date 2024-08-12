'use client'
import style from './btn.module.scss'
import { ButtonHTMLAttributes, forwardRef, Ref, ReactNode, LegacyRef } from 'react'
import classNames from 'classnames'
import Content from './btn-content'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    ref?: React.Ref<HTMLButtonElement>
}
interface LinkProps {
    className?: string
    children: ReactNode
    href: string
    ref?: LegacyRef<HTMLAnchorElement>
}
export interface BtnProps {
    className?: string
    children?: ReactNode
    icon?: string
    href?: string
    ref?: Ref<HTMLButtonElement>
    isSmall?: boolean
    isLink?: boolean
}

const Button = forwardRef<ButtonProps, any>(({ children, ...props }, ref) => <button ref={ ref } { ...props }>{ children }</button>)
const A = forwardRef<LinkProps, any>(({ children, ...props }, ref) => <a ref={ ref } { ...props }>{ children }</a>)


const Btn= forwardRef<BtnProps, any>(({ className, children, icon, href, isSmall, isLink, ...props }, ref) => {
    const cl = classNames(style.btn, className, {
        [style['btn--link']]: isLink,
        [style['btn--small']]: isSmall
    })
    if (href != undefined) return (
        <A { ...props } href={ href } ref={ ref } className={ cl }>
            <Content icon={ icon }>{ children }</Content>
        </A>
    )
    return (
        <Button { ...props } ref={ ref } className={ cl }>
            <Content icon={ icon }>{ children }</Content>
        </Button>
    )
})

export default Btn