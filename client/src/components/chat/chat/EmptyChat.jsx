import React from 'react'
import { Box, Divider, styled, Typography } from '@mui/material'
import { emptyChatImage } from '../../../contants/data'

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 100px;
`;

const Image = styled('img')({
  width: 400,
  marginTop: 100,
})

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 30px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt='chat here' />
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and receive message without keeping your phone online.</SubTitle>
        <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        <StyledDivider />
      </Container>
    </Component>
  )
}

export default EmptyChat