import { FC } from 'react'
import Container from './UI/container'
import Calendary from './UI/calendary'
import Tag from './UI/tag'
import List from './UI/list'
import ScrollShadow from './UI/scroll-shadow'
import CalendaryLine from './UI/calendary-line'
import CalendaryDay from './components/calendary-day'

const App: FC = () =>  {
	return (
		<Container>
			<ScrollShadow className='full'>
				<CalendaryDay/>
			</ScrollShadow>
		</Container>
    )
}

export default App
