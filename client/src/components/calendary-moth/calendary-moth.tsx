import { FC } from 'react'
import style from './calendary-moth.module.scss'
import Calendary from '../../UI/calendary'
import ScrollShadow from '../../UI/scroll-shadow'
import { CalendaryProps } from '../../UI/calendary/calendary'

interface CalendaryMothProps extends CalendaryProps {
}

const CalendaryMoth: FC<CalendaryMothProps> = ({ month, year, data}) => {
    return (
		<ScrollShadow className={ style.scroll }>
			<Calendary 
				month={ month } 
				year={ year }  
				data={ data }
			>
			</Calendary>
		</ScrollShadow>
    )
}

export default CalendaryMoth