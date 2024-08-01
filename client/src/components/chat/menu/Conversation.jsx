import React, { useContext } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api';

const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    Cursor: pointer;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover',
})

const Conversation = ({ user }) => {

    const { setPerson, account } = useContext(AccountContext);
    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    };

    const capitalizeName = (name) => {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt='dp' />
            </Box>
            <Box>
                <Box>
                    <Typography>{capitalizeName(user.name)}</Typography>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation