import { useFormik } from "formik";
import * as Yup from 'yup';

import Input from "../../components/Input/Input";
import Button from "../Button/Button";
import { CheckBoxContainer, EmployeeFormComponent, Label, LabelCheckBox, Title } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
    const schema = Yup.object().shape({
        name: Yup.string()
        .required('Field full name is required')
        .min(5, 'Min 5 symbols')
        .max(50, 'Max 50 symbols'),
        age: Yup.number().typeError('Тип значения число')
        .required('Field age is required')
        .min(18, 'Минимальний возраст сотрудника - 18 лет')
        .max(80, 'Максимальний возраст сотрудника - 18 лет'),
        rulesAccepted: Yup.boolean()
        // Єтот метод позволяет определить определенние значения
        .oneOf([true], "Rules must be accepted"),
        password: Yup.string()
        .required('Field password is required')
        // Єтот метод принимает регулярное виражение: (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        // вторим аргументом принимает текст ошибки
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)'
        ),
        code: Yup.number().typeError('Тип значения число')
        // test принимает три аргумента, название ошибки, текст ошибки, стрелочная функция
        .test('min length', 'Min 3 символа', (value)=>String(value).length >= 3)
        .test('max length', 'Max 8 символов', (value)=>String(value).length <= 8)
        
    })

    const formik = useFormik({
        initialValues: {
        name: '',
        age: '',
        rulesAccepted: false,
        password: '',
        code: ''
        } as EmployeeFormValues,

    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: EmployeeFormValues) => {
        console.table(values);
    }
    }) 

    return (
        <EmployeeFormComponent onSubmit={formik.handleSubmit}>
        <Title>Employee Form</Title>
        <Input
        name='name'
        label='Full Name *'
        id='name_id'
        placeholder="Enter your full name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
       <Input
        name='age'
        label='Age *'
        id='age_id'
        placeholder="Enter your age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
       <Input 
        name='password'
        label='Password *'
        id='password_id'
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        />
      <Input 
        name='code'
        label='Code'
        id='code_id'
        placeholder="Enter your employee code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
        />
      <CheckBoxContainer>
        <LabelCheckBox htmlFor="rulesAccepted_id">
          <input
            type="checkbox"
            id="rulesAccepted_id"
            name="rulesAccepted"
            // ДЛя checkbox используют атрибут cheked вместо атрибута values 
            checked={formik.values.rulesAccepted}
            onChange={formik.handleChange}
          />
          I agree privacy and policy
        </LabelCheckBox>
        
          <Label > {formik.errors.rulesAccepted}</Label>
      </CheckBoxContainer>
      <Button name="Create"/>
        </EmployeeFormComponent>
    )
}

export default EmployeeForm