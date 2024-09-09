import { FieldsetHTMLAttributes, forwardRef, ReactNode } from 'react'
import style from './fieldset.module.scss'
import classNames from 'classnames'
interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    children: ReactNode
    legend: ReactNode
    className?: string
}

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(({ children, legend, className }, ref) => {
    return (
        <fieldset ref={ ref } className={ classNames(style.fieldset, className) }>
            <legend className={style['fieldset__legend']}>{ legend }</legend>
            { children }
        </fieldset>
    )
})

export default Fieldset