import { InputComponent, InputContainer, Label } from './styles'
import { InputProps } from './types'

function Input({
    placeholder,
    name,
    value,
    type='text',
    onChange,
    label,
    id,
    search
}: InputProps) {
return (
<InputContainer>
<Label htmlFor={id}>{label}</Label>
<InputComponent 
    name={name}
    placeholder={placeholder} 
    value={value}
    onChange={onChange}
    type={type}
    id={id}
    isSearch={search}
    />
</InputContainer>
)
}

export default Input