import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import ConnectToDatabase from './database/db.js';
import chatRouter from './routes/chatRouter.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', chatRouter); 

app.use((error, request, response, next) => {
    console.error('Error:', error.message);
    request.status(500).send('Something went wrong!');
});

ConnectToDatabase();

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`)
})