import { FC } from 'react'
import style from './btn-for-input.module.scss'
import classNames from 'classnames'
interface BtnForInputProps {
    className?: string
}

const BtnForInput: FC<BtnForInputProps> = ({ className }) => {
    return (
        <div className={ classNames(style.btn-for-input, className) }>
        </div>
    )
}

export default BtnForInput