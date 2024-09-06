import { forwardRef, InputHTMLAttributes } from 'react'
import style from './input.module.scss'
import classNames from 'classnames'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <input 
            className={ classNames(style.input, className) } 
            ref={ ref }
            { ...props }
        />
    )
})

export default Input