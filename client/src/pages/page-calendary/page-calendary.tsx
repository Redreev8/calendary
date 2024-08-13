import { FC } from 'react'
import Container from '../../UI/container'
import CalendaryMoth from '../../components/calendary-moth'
import Tag from '../../UI/tag'
import List from '../../UI/list'
import ScrollShadow from '../../UI/scroll-shadow'
import CalendaryTitle from '../../UI/calendary-title'
import useDateChage from '../../UI/calendary-title/useDateChage'

const PageCalendary: FC = () => {
	const { month, year, setDate } = useDateChage()
    return (
		<Container>
			<>
				<CalendaryTitle month={month} year={year} onClick={setDate} />
				<CalendaryMoth
					month={ month }
					year={ year }
					data={{
						7: {
							'6': <ScrollShadow><List isRow isBorder><Tag>content</Tag><Tag>content</Tag><Tag>content</Tag><Tag>content</Tag></List></ScrollShadow>,
							'7': <List><Tag>content</Tag></List>,
							'8': <List><Tag>content</Tag></List>,
							'30': <List><Tag>content</Tag></List>,
						},
						'8': {
							'1': <List><Tag>content</Tag></List>
						} 
					}}
				/>
			</>
		</Container>
    )
}

export default PageCalendary