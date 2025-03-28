// 1 способ стилизации с использованием файла styles.css
import './styles.css'
// импортируем стилизованние компоненти emotion
import { BoxInfo, TitleCard, AvatarImg } from './styles';
import Avatar from '../../assets/avatar.jpg'

function Lesson09 () {
    // Обьект для inline стилей (2 способ)
    const textStyles = {color: 'burlywood', fontSize: '28px'};

    return (
    <div className="lesson09-container">
        <h1>Styling components</h1>
        {/* 2 способ стилизации с помощью Inline styles( передача обьекта стилей в атрибут style тега ) */}
        <div style={{color: 'blueviolet', fontSize: '24px'}}>Inline styles example</div>
        <p style={textStyles}>Inline styles example 1</p>
        <div style={textStyles}>Inline styles example 2</div>
        {/* 3 способ - стилизации компонентов emotion */}
        {/* <BoxInfo primary={true}>Emotion example 1</BoxInfo>
        <BoxInfo primary={false}>Emotion example 2</BoxInfo>> */}
        {/* присуствие primary означает - true, отстуствие - false */}
        <BoxInfo primary>
               <TitleCard>Marta</TitleCard>
               <AvatarImg src={Avatar}/>
        </BoxInfo> 
        <BoxInfo>Emotion example 2</BoxInfo>
    </div>

)
}

export default Lesson09