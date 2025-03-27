import { ChangeEvent, useState } from 'react';

import './styles.css'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
// все картинки в проекте уже експортировани по умолчанию, чтоби добавить картинку, 
// нужно ее просто импортировать и придумать псевдоним.
import AvatarImg from '../../assets/avatar.jpg'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';


function Lesson08 (){
    // Неконтролируемий елемент(компонент) - елемент, которий контролируеться браузером
    // контролируемий елемент(компонент) - елемент, которий контролируеться с помощью React

    // 1 шаг контроля - создание state, в котором будет храниться значение поля
   const [message, setMessage] = useState<string>('');
   const [showMessage, setShowMessage] = useState<boolean>(false);

   // 2 шаг контроля - создание функции, которая будет изменять значение state, при 
   // изменении значения в поле
   const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
    setMessage(event.target.value)
   }

   const showMessageHandler = () =>{
    setShowMessage(true)
   }

    return (
        <div className="lesson08-container">
            <Input name='example' />
            <Input 
            name='message' 
            label='Message' 
            id='message_id' 
            placeholder='Enter your message'
            value={message}
            onChange={ onChangeMessage }
            />
            <Button name='Show message' onClick={showMessageHandler}/>
            {showMessage && <div>{message}</div>}
            {/* Если в компоненте используеться props children, то в таком случае компонент визиватеься с 
            использование откривающеtuj и закривающего елемента, а между ними добавляються те JSX елементи
            ,которие ми хотим подставить вместо children */}
            <EmployeeCard 
            name='Mary Smith'
            position='Software Engineer'
            department='IT'
            img={AvatarImg}
            >
                <h3>The best employee</h3>
                <Button name='Show personal page'/>
                </EmployeeCard>
        </div>
    )
}

export default Lesson08