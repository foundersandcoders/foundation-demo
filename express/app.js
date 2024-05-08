import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { books } from './books.js';

const PORT = process.env.PORT || 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET routes

app.get('/', (req, res) => {
  res.send('Home Route')
})

// Books route with a dynamic param -----------------------------

app.get('/books/:bookId', (req, res) => {
  // Get value from req body


  // Manipulate value


  // Send response

  
});

// Books route with a query -----------------------------

app.get('/books', (req, res) => {
  // Get value from req body



  // Use category value


  // Send response


});

// Post route add new book

app.post('/books', (req, res) => {
  // Todo take a book from req body and add to book object
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
