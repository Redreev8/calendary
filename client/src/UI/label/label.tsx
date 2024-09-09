import { FC, LabelHTMLAttributes, ReactNode } from 'react'
import style from './label.module.scss'
import classNames from 'classnames'
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    label: ReactNode
    isHidenLabel?: boolean
}

const Label: FC<LabelProps> = ({ className, children, label, isHidenLabel=false }) => {
    return (
        <label className={ classNames(style.label, className) }>
            <span className={ classNames(style['label__text'], { [style['label__text--heden']]: isHidenLabel }) }>{ label }</span>
            { children }
        </label>
    )
}

export default Label