import { ChangeEvent, useState } from "react"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

function Homework08() {
    const [password, setPassword]= useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const showPasswordHandler = () => {
        setShowPassword(true);
    }

    const hidePasswordHandler = () => {
        setShowPassword(false);
    }

    return (
        <div>
            <h1>Change password:</h1>
            <Input
                name='passwordName'
                label="Password"
                placeholder="Enter your password"
                type="password"
                id="password_id"
                value={password}
                onChange={onChangePassword}
            />
            <Button name='SHOW PASSWORD' onClick={showPasswordHandler}/>
            <Button name='HIDE PASSWORD' onClick={hidePasswordHandler}/>
            {showPassword && <div>{password}</div>}
        </div>
    )
}

export default Homework08