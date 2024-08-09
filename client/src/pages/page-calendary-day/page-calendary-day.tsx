import { FC } from 'react'
import style from './page-calendary-day.module.scss'
import classNames from 'classnames'
import Title from '../../UI/title'
import Container from '../../UI/container'
import ScrollShadow from '../../UI/scroll-shadow'
import CalendaryDay from '../../components/calendary-day'
interface PageCalendaryDayProps {
    className?: string
}

const PageCalendaryDay: FC<PageCalendaryDayProps> = ({ className }) => {
    const cl = classNames(style.logo, className)
    return (
		<Container>
			<>
				<Title>Октябрь</Title>
				<ScrollShadow className='full'>
					<CalendaryDay/>
				</ScrollShadow>
			</>
		</Container>
    )
}

export default PageCalendaryDay