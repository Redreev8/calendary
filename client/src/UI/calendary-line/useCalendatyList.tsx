import style from './calendary-line.module.scss'
import classNames from 'classnames'
import getDaysMoth, { DayObj } from '../../helper/get-days-moth'
import { CalendaryProps } from '../calendary/calendary'
import Title from '../title'
import ScrollShadow from '../scroll-shadow'

const useCalendatyList = ({ month, year, data }: CalendaryProps) => {
    const days = () => {
        const { days } = getDaysMoth<DayObj>({ month: month, year: year, template: (props) => props})
        const getContent = (i: number, day: number) => {
            if (!data[`${i}`]) return        
            if (!data[`${i}`][`${day}`]) return
            return data[`${i}`][`${day}`]
        }
        return days.map(day => (
            <div 
                className={classNames(style.content, {
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
    return days
}

export default useCalendatyList