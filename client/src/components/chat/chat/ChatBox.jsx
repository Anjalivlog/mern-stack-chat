import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';

const ChatBox = () => {

    const [conversation, setConversation] = useState({});
    const { person, account } = useContext(AccountContext);

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Box>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox