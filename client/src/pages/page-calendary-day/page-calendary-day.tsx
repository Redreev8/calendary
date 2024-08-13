import { FC } from 'react'
import Container from '../../UI/container'
import ScrollShadow from '../../UI/scroll-shadow'
import CalendaryDay from '../../components/calendary-day'
import CalendaryTitle from '../../UI/calendary-title'
import List from '../../UI/list'
import Card from '../../UI/card'
import Title from '../../UI/title'
import useDateChage from '../../UI/calendary-title/useDateChage'
interface PageCalendaryDayProps {
}

const PageCalendaryDay: FC<PageCalendaryDayProps> = () => {
	const { month, year, setDate } = useDateChage()
    return (
		<Container>
			<>
				<CalendaryTitle month={month} year={year} onClick={setDate} />
				<ScrollShadow className='full'>
					<CalendaryDay
						month={ month }
						year={ year }
						data={{
							8: {
								1: <List isBorder>
									<Card>
										<Title level={3}>Title level 3</Title>
										<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias corporis atque enim animi sapiente voluptas porro. Earum quaerat similique velit rem autem, repudiandae, ut corrupti sed iusto eaque quis.</p>
									</Card>
									<Card>
										<Title level={3}>Title level 3</Title>
										<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias corporis atque enim animi sapiente voluptas porro. Earum quaerat similique velit rem autem, repudiandae, ut corrupti sed iusto eaque quis.</p>
									</Card>
									<Card>
										<Title level={3}>Title level 3</Title>
										<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias corporis atque enim animi sapiente voluptas porro. Earum quaerat similique velit rem autem, repudiandae, ut corrupti sed iusto eaque quis.</p>
									</Card>
									<Card>
										<Title level={3}>Title level 3</Title>
										<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias corporis atque enim animi sapiente voluptas porro. Earum quaerat similique velit rem autem, repudiandae, ut corrupti sed iusto eaque quis.</p>
									</Card>
									<Card>
										<Title level={3}>Title level 3</Title>
										<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias corporis atque enim animi sapiente voluptas porro. Earum quaerat similique velit rem autem, repudiandae, ut corrupti sed iusto eaque quis.</p>
									</Card>
								</List>
							}
						}}
					/>
				</ScrollShadow>
			</>
		</Container>
    )
}

export default PageCalendaryDay