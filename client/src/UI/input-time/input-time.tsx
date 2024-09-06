import { FC } from 'react'
import style from './input-time.module.scss'
import classNames from 'classnames'
import Input from '../input/input'
interface InputTimeProps {
    className?: string
}

const InputTime: FC<InputTimeProps> = ({ className }) => {
    return (
        <Input type='time' className={ classNames(style['input-time'], className) }/>
    )
}

export default InputTime