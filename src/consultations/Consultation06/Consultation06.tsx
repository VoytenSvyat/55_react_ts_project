import { useEffect, useState } from "react";
import { Consultation06Container, UserCard, Error, Avatar, UserName, UserInfo } from "./styles"
import axios from "axios"

function Consultation06 () {
    const USER_URL: string = 'https://randomuser.me/api/';

    const [error, setError] = useState<string | undefined>(undefined);
    const [userData, setUserData] = useState<any>(undefined);

    const getUser = async() => {
        try {
            const response = await axios.get(USER_URL);
            setUserData(response.data.results[0]);
        } catch (error: any) {
            setError(error.message)
        } finally {

        }
    }

    useEffect(() => {getUser()}, []);

    return (
    <Consultation06Container>
        {userData && <UserCard>
            <Avatar src={userData.picture.large} alt="user avatar"/>
            <UserName>Name: {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</UserName>
            <UserInfo>Phone:{userData.phone}</UserInfo>
            <UserInfo>Email:{userData.email}</UserInfo>
        </UserCard>}
        <Error>{error}</Error>
    </Consultation06Container>
)
}

export default Consultation06