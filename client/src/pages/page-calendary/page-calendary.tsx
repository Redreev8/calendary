import { FC } from 'react'
import Container from '../../UI/container'
import CalendaryMoth from '../../components/calendary-moth'

interface PageCalendaryProps {
}

const PageCalendary: FC<PageCalendaryProps> = ({ }) => {
    return (
		<Container>
			<CalendaryMoth/>
		</Container>
    )
}

export default PageCalendary