import React, { useContext } from 'react'
import { Box, styled, Typography } from '@mui/material';
import formatDate from '../../../utils/commenUtils';
import { AccountContext } from '../../../context/AccountProvider';

const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 8px;
    word-break: break-word;
`;

const Wrapper = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 8px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;
const Message = ({ message }) => {

    const { account } = useContext(AccountContext);
    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Own>
                    :
                    <Wrapper>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Wrapper>
            }
        </>

    )
}

// const TextMessage = ({ message }) => {
    
//     return (
//         <>
//             <Text>{message.text}</Text>
//             <Time>{formatDate(message.createdAt)}</Time>
//         </>
//     )
// }


export default Message;