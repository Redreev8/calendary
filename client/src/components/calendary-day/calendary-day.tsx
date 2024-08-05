import { FC } from 'react'
import style from './calendary-day.module.scss'
import classNames from 'classnames'
import CalendaryLine from '../../UI/calendary-line'
import List from '../../UI/list'
import Card from '../../UI/card'
import Title from '../../UI/title'
interface CalendaryDayProps {
    className?: string
}

const CalendaryDay: FC<CalendaryDayProps> = ({ className }) => {
    const cl = classNames(style.logo, className)
    return (
        <CalendaryLine month={8} year={2024} data={{
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
        }}></CalendaryLine>
    )
}

export default CalendaryDay