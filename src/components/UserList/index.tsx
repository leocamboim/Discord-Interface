import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot ?: boolean;
}

const UserRow : React.FC <UserProps>= ({ nickname, isBot }) => {
    return(
        <User>
            <Avatar className={ isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList : React.FC= () => {
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Leozin" />
            <UserRow nickname="Xuao" isBot />
            <UserRow nickname="Isa" />
            <UserRow nickname="Kesly" isBot />
            <UserRow nickname="Karow" isBot />
            <UserRow nickname="Luanzin" />
            <UserRow nickname="Mister" />
            <UserRow nickname="DigoDigo" />

            <Role>Indisponível - 1</Role>
            <UserRow nickname="Xuao" isBot />
            <UserRow nickname="Isa" />
            <UserRow nickname="Kesly" isBot />
            <UserRow nickname="Karow" isBot />
            <UserRow nickname="Luan" />
            <UserRow nickname="Mister" />
            <UserRow nickname="DigoDigo" />
            <UserRow nickname="Xuao" isBot />
            <UserRow nickname="Isa" />
            <UserRow nickname="Kesly" isBot />
            <UserRow nickname="Karow" isBot />
            <UserRow nickname="Luan" />
            <UserRow nickname="Mister" />
            <UserRow nickname="DigoDigo" />

        </Container>
    )
};

export default UserList ;