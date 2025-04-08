import * as Yup from 'yup'
import { useFormik } from 'formik';


import Input from "../../components/Input/Input";
import { CheckboxHomeworkContainer, CheckboxHomework, CheckboxLabel, Homework15Container, ErrorMessage } from "./styles";
import { InputFormValues } from './types';
import Button from '../../components/Button/Button';


function Homework15 () {

    const schema = Yup.object().shape({
        validation_code: Yup.number().typeError('Тип значения - число')
        .required('Поле Full Name является обязательным')
        .test('min length', 'Мin 6 символов', (value)=>String(value).length >=  6),
        privacyPolicy: Yup.boolean()
        .oneOf([true], 'Accept agreement')
    })

    const formik = useFormik({
        initialValues: {
            validation_code: '',
            privacyPolicy: false
        } as InputFormValues, 
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: () => {
          console.log('Вы успешно вошли');
        }
    });

    return (
        <Homework15Container>
            <form onSubmit={formik.handleSubmit}>
            <Input 
            name='validation_code'
            label="Validation code"
            id="validation_code_id"
            placeholder="Enter your validation code"
            value={formik.values.validation_code}
            onChange={formik.handleChange}
            type="number"
            error={formik.errors.validation_code}
             />
        <CheckboxHomeworkContainer>
            <CheckboxHomework
          name='privacyPolicy'
          type='checkbox'
          id='privacyPolicy_id'
          checked={formik.values.privacyPolicy}
          onChange={formik.handleChange}
            />
        <CheckboxLabel htmlFor='privacyPolicy_id'>
          I agree privacy and policy
        </CheckboxLabel>
      </CheckboxHomeworkContainer>
      <ErrorMessage>{formik.errors.privacyPolicy}</ErrorMessage>
      <Button
        name='Login' 
        type='submit'
        />
        </form>
        </Homework15Container>
    )
}

export default Homework15