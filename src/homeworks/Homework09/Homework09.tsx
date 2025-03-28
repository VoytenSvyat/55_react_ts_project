import { BoxCard, DescriptionCard1, DescriptionCard2, UserCard, VipCard } from './styles'
import './styles.css'

function Homework09() {
    return(
        <div className="homework09-container">
            <BoxCard primary>
                <VipCard>VIP Пользователь</VipCard>
                <DescriptionCard1>Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка</DescriptionCard1>
            </BoxCard>
            <BoxCard>
                <UserCard>Обычный Пользователь</UserCard>
                <DescriptionCard2>Стандартный доступ, базовые функции и поддержка в порядке очереди</DescriptionCard2>
            </BoxCard>
        </div>
    )
} 

export default Homework09