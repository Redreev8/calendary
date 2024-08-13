import { FC } from 'react'
import CalendaryLine from '../../UI/calendary-line'
import { CalendaryProps } from '../../UI/calendary/calendary'
interface CalendaryDayProps extends CalendaryProps {
}

const CalendaryDay: FC<CalendaryDayProps> = ({ month, year, data }) => {
    return (
        <CalendaryLine month={month} year={year} data={data}></CalendaryLine>
    )
}

export default CalendaryDay