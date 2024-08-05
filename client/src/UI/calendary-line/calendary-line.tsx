import { FC } from 'react'
import style from './calendary-line.module.scss'
import classnames from 'classnames'
import List from '../list'
import getDaysMoth, { DayObj } from '../../helper/get-days-moth'
import Title from '../title'
import ScrollShadow from '../scroll-shadow'
import { CalendaryProps } from '../calendary/calendary'
interface CalendaryLineInterface extends CalendaryProps {
    className?: string
}

const CalendaryLine: FC<CalendaryLineInterface> = ({ month, year, className, data }) => {
    const arr = () => {
        const { days } = getDaysMoth<DayObj>({ month: 8, year: 2024, template: (props) => props})
        const getContent = (i: number, day: number) => {
            if (!data[`${i}`]) return        
            if (!data[`${i}`][`${day}`]) return
            return data[`${i}`][`${day}`]
        }
        return days.map(day => (
            <div 
                className={classnames(style.content, {
                    [style.prew]: month !== day.month
                }) 
            }>
                <Title level={3} className={ style.day }>{ day.day }</Title>
                <ScrollShadow className={ style.scroll }>
                    { getContent(day.month, day.day) }
               </ScrollShadow>
            </div>
        ))
    }
    return (
        <List className={ style.list } isBorder isRow>
            { arr() }
        </List>
    )
}

export default CalendaryLine