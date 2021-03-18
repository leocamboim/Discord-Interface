import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData : React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(25).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}
                        author="Leozin"
                        date="18/03/2021"
                        content="Leozin solou o Discord!"
                    />
                ))}
                <ChannelMessage 
                    author="Leozin"
                    date="18/03/2021"
                    content={
                        <>
                            <Mention>@Leozin</Mention> que cara bom
                        </>
                    } 
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData ;