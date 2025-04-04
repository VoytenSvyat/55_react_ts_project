// Импорт хука из формика UseFormik
import { useFormik } from "formik"
import * as Yup from 'yup';

import Button from "../Button/Button"
import Input from "../Input/Input"
import { LoginFormComponent, Title } from "./styles"
import { LoginFormValues } from "./types"

function LoginForm() {

    // Создание валидационной схеми
    const schema = Yup.object().shape({
        email: Yup.string()
        .required('Field email is required')
        .email('Field has type email (@ и т. д.)')
        .max(25, 'Max 25 symbols')
        .min(15, 'Min 15 symbols'),
        password: Yup.number()
        .typeError('Password must be a number')
        .required('Field password is required')
        .max(255, 'Max 255')
        .min(15, 'Min 15')
    })

    // Настройка форми. При визове useFormik в него нужно передать аргумент
    // аргумент - обьект, с данними настройкой определенной форми
    // При визове useFormik, возвращаеться обьект, в єтом обьекте храняться значение полей, ошибки
    // и также различние методи для работи с формой 
    
    const formik = useFormik({
    // в обьекте настройки 2 обязательних свойства 
    // initialValues - обьект, в котором ключами являються значение атрибутов name полей форми
    initialValues: {
        email: '',
        password: ''
    } as LoginFormValues,
    // validationSchema - свойство, в значение которого добавляю ранне созданную валидационную схему (через Yup)
    validationSchema: schema,
    // ошибки в полях будут появляться только при нажатии на кнопку submit
    validateOnChange: false,
    // появление ошибки сразу при загрузке страници, при проверке ошибок
    // validateOnMount: false,
    //onSubmit - функция, которая будет визваная, когда произойдет собитие submit для форми
    onSubmit: (values: LoginFormValues)=>{
        console.table(values);
    }
    })

    console.log(formik);
    

    return(
        // Для виполнения функции, которая прописана в свойстве onSubmit (в настройке useFormik)
        // необходимо в елемент форми (LoginFormComponent) передать formik.handleSubmit
    <LoginFormComponent onSubmit={formik.handleSubmit}>
        {/* Для контроля елементов форми необходимо передать значения в prop value и onChange {formik.values.email} 
        для onChange - одинаковий для всех елементов {formik.handleChange} */}
        <Title>Login form</Title>
        <Input 
        name='email'
        label='Email *'
        id='email_id'
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
        <Input 
        name='password'
        label='password *'
        id='password_id'
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        />
        <Button name="LOGIN" />
    </LoginFormComponent>
)
}

export default LoginForm