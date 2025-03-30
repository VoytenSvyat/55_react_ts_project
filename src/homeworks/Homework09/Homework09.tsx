import { BoxCard, CardContainer, DescriptionCard, VipCard } from './styles'

function Homework09() {
    return(
        <CardContainer>
            <BoxCard primary>
                <VipCard>VIP Пользователь</VipCard>
                <DescriptionCard>Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка</DescriptionCard>
            </BoxCard>
            <BoxCard>
                <VipCard>Обычный Пользователь</VipCard>
                <DescriptionCard>Стандартный доступ, базовые функции и поддержка в порядке очереди</DescriptionCard>
            </BoxCard>
        </CardContainer>
    )
} 

export default Homework09