import './styles.css';
import { ButtonProps } from './types';

// interface ButtonProps {
//     name: string,
//     // void - если функция ничего не возв
//     onClick?: () => void,
//     disabled?: boolean ,
//     type?: 'submit' | 'button' | 'reset'
// }

function Button({name, onClick, disabled = false, type= 'submit' }: ButtonProps ) {
    return (
    <button
        className="main-button"
        onClick={onClick}
        disabled={disabled}
        type={type}
    >
        {name}
    </button>
    )
}

export default Button