import { MainButton } from './styles';
import { ButtonProps } from './types';

// interface ButtonProps {
//     name: string,
//     // void - если функция ничего не возв
//     onClick?: () => void,
//     disabled?: boolean ,
//     type?: 'submit' | 'button' | 'reset'
// }

function Button({
    name,
    onClick,
    disabled = false,
    type= 'submit',
    danger
}: ButtonProps ) {
    return (
    <MainButton
        onClick={onClick}
        disabled={disabled}
        type={type}
        IsDanger={danger}
    >
        {name}
    </MainButton>
    )
}

export default Button