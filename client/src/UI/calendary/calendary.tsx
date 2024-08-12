import style from './calendary.module.scss'
import { FC, forwardRef, ReactNode } from 'react'
import { PropsGetDaysWeek } from '../../helper/get-days-week-moth'
import classnames from 'classnames'
import Table from '../table'
import useCalendary from './useCalendary'

export interface CalendaryProps extends PropsGetDaysWeek {
    data: {
        [key: number]: {
            [key: number]: ReactNode
        }
    }
    isList?: boolean
}

const Calendary = forwardRef<HTMLTableElement, CalendaryProps>(({ day = 1, month, year, data, isList=true }, ref) => {
    const cl = classnames({
        [style.list]: isList
    })
    const { ths, DataTable } = useCalendary({ day, month, year, data })

    return (
        <Table
            ref={ ref }
            className={ cl }
            th={ ths() }
            data={ DataTable() }
        />
    )
})

export default Calendary