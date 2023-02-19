import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const app = express();
// tambahkan middleware
app.use(cors());
app.use(express.json()); //agar bisa menerima response berupa json
app.use(UserRoute); // panggil sebagai middleware

app.listen(5000, () => console.log('Server up and running'));
