import { FC } from 'react'
import style from './input-date.module.scss'
import classNames from 'classnames'
import Input from '../input/input'
interface InputDateProps {
    className?: string
}

const InputDate: FC<InputDateProps> = ({ className }) => {
    return (
        <Input type='date' className={ classNames(style['input-date'], className) }/>
    )
}

export default InputDate