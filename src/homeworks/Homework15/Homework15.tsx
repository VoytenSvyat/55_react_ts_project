import * as Yup from 'yup'
import { useFormik } from 'formik';

import Input from "../../components/Input/Input";
import { Homework15Container, ValidationForm } from "./styles";
import { ValidationFormValues } from './types';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';

function Homework15 () {

    const schema = Yup.object().shape({
        validation_code: Yup.number()
        .required('Поле Validation Code является обязательным')
        // .matches(/^d{6}$/, 'Код должен содержать 6 символов')(тип: Yup.string()),
        .test('6symbols', 'Код должен содержать  6 символов', (value)=>String(value).length === 6),
        privacyPolicy: Yup.boolean()
        .oneOf([true], 'Accept agreement')
    })

    const formik = useFormik({
        initialValues: {
          validation_code: '',
          privacyPolicy: false
        } as ValidationFormValues, 
        validationSchema: schema,
        validateOnChange: false,
        // formikHelpers.resetForm() используеться для очистки форми submit
        onSubmit: (_, formikHelpers ) => {
          console.log('Вы успешно вошли');
        formikHelpers.resetForm()
        }
    });

    return (
        <Homework15Container>
          <ValidationForm onSubmit={formik.handleSubmit}>
            <Input 
            name='validation_code'
            label="Validation code"
            id="validation_code_id"
            type='number'
            placeholder="Enter your validation code"
            value={formik.values.validation_code}
            onChange={formik.handleChange}
            error={formik.errors.validation_code}
            />
             <Checkbox 
             name='privacyPolicy'
             checked={formik.values.privacyPolicy}
             onChange={formik.handleChange}
             id='privacyPolicy_id'
             label='Privacy and Policy'
             error={formik.errors.privacyPolicy}
            />
        <Button name='Login'/>
        </ValidationForm>
        </Homework15Container>
    )
}

export default Homework15