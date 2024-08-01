import express from 'express';
import { addUserController, getUsers } from '../controller/userController.js';
import { getConversation, newConversation } from '../controller/conversationController.js';
import { getMessages, newMessage } from '../controller/messageController.js';
import { getImage, uploadImage } from '../controller/imageController.js';
import upload from '../utils/upload.js';

const chatRouter = express.Router();

chatRouter.post('/add', addUserController);
chatRouter.get('/users', getUsers);

chatRouter.post('/conversation/add', newConversation);
chatRouter.post('/conversation/get', getConversation);

chatRouter.post('/message/add', newMessage);
chatRouter.get('/message/get/:id', getMessages);

chatRouter.post('/file/uploaded', upload.single('file') , uploadImage);
chatRouter.get('/file/:filename', getImage);

export default chatRouter;