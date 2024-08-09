import { FC } from 'react'
import style from './calendary-moth.module.scss'
import Calendary from '../../UI/calendary'
import Tag from '../../UI/tag'
import List from '../../UI/list'
import ScrollShadow from '../../UI/scroll-shadow'

interface CalendaryMothProps {
}

const CalendaryMoth: FC<CalendaryMothProps> = ({ }) => {
    return (
		<ScrollShadow className={ style.scroll }>
			<Calendary 
				month={ 6 } 
				year={ 2024 }  
				data={{
					6: {
						'6': <ScrollShadow><List isRow isBorder><Tag>content</Tag><Tag>content</Tag><Tag>content</Tag><Tag>content</Tag></List></ScrollShadow>,
						'7': <List><Tag>content</Tag></List>,
						'8': <List><Tag>content</Tag></List>,
						'30': <List><Tag>content</Tag></List>,
					},
					'5': {
						'6': <List><Tag>content</Tag></List>
					} 
				}}
			>
			</Calendary>
		</ScrollShadow>
    )
}

export default CalendaryMoth