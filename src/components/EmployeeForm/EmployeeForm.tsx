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
        age: Yup.number()
        .required('Field age is required')
        .min(18, 'Max 18')
        .max(80, 'Min 80'),
        rulesAccepted: Yup.boolean()
        .oneOf([true], "Rules must be accepted"),
    })

    const formik = useFormik({
        initialValues: {
        name: '',
        age: '',
        rulesAccepted: false
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
        name='full name'
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
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <CheckBoxContainer>
        <LabelCheckBox htmlFor="rulesAccepted">
          <input
            type="checkbox"
            id="rulesAccepted"
            name="rulesAccepted"
            checked={formik.values.rulesAccepted}
            onChange={formik.handleChange}
          />
          Правила использования
        </LabelCheckBox>
        {formik.errors.rulesAccepted && (
          <Label > {formik.errors.rulesAccepted}</Label>
        )}
      </CheckBoxContainer>
      <Button name="Create"/>
        </EmployeeFormComponent>
    )
}

export default EmployeeForm