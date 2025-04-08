import { ChangeEvent } from 'react';

export interface CheckboxProps {
    id?: string,
    name: string,
    checked: boolean,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    error?: string
}