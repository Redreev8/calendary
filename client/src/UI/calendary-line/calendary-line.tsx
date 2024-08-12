import { forwardRef } from 'react'
import style from './calendary-line.module.scss'
import classnames from 'classnames'
import List from '../list'
import { CalendaryProps } from '../calendary/calendary'
import useCalendatyList from './useCalendatyList'
interface CalendaryLineProps extends CalendaryProps {
    className?: string
}

const CalendaryLine = forwardRef<HTMLUListElement, CalendaryLineProps>(({ month, year, data, className }, ref) => {
    const days = useCalendatyList({ month, year, data })
    return (
        <List ref={ ref } className={ classnames(style.list, className) } isBorder isRow>
            { days() }
        </List>
    )
})

export default CalendaryLine