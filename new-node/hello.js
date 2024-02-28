import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const someApiKey = process.env.SOME_API_KEY

const app = express();

app.get('/', (req, res) => {
  res.send('<input type="text"></input>');
});

app.get('/happy', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
