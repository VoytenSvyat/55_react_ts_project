export interface InputProps {
    placeholder?: string,
    name: string,
    value?: string,
    type?: 'text' | 'email' | 'number' | 'password' | 'tel',
    onChange?: () => void,
    label?: string,
    id?: string
}