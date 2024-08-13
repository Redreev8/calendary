import { FC } from 'react'
import style from './calendary-title.module.scss'
import classNames from 'classnames'
import Title from '../title'
import List from '../list'
import Btn from '../btn'
import nameMonth from '../../helper/name-month'
interface CalendaryTitleProps {
    month: number
    year: number
    className?: string
    onClick: (month: number) => void
}

const CalendaryTitle: FC<CalendaryTitleProps> = ({ month, year, onClick, className }) => {
    const nextMonth = month + 1 === 12 ? 0 : month + 1
    const prevMonth = month - 1 === -1 ? 11 : month - 1
    return (
        <div className={ classNames(style['calendary-title'], className) }>
            <Title>{ nameMonth[month] } {year}</Title>
			<List isBorder isRow>
				<Btn onClick={ () => onClick(prevMonth) }>{ nameMonth[prevMonth] }</Btn>
				<Btn onClick={ () => onClick(nextMonth) }>{ nameMonth[nextMonth] }</Btn>
			</List>
        </div>
    )
}

export default CalendaryTitle