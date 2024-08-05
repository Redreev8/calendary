import { FC } from 'react'
import style from './calendary-line.module.scss'
import classNames from 'classnames'
interface CalendaryLineInterface {
    className?: string
}

const CalendaryLine: FC<CalendaryLineInterface> = ({ className }) => {
    const cl = classNames(style.logo, className)
    return (

    )
}

export default CalendaryLine