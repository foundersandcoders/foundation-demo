import express from 'express';
import { books } from '../books.js';

// Books route with a dynamic param -----------------------------

const router = express.Router();
router.get('/:bookId', (req, res) => {
  const { bookId } = req.params;

  // Manipulate value

  const idToNum = typeof bookId === 'string' ? parseInt(bookId) : NaN;

  if (idToNum === NaN) {
    res.status(400).json({
      error:
        'Invalid count query parameter. Please provide a positive integer.',
    });
  }
  const addToId = idToNum + 1;
  res.send(`Received param with value of book id: ${addToId}`);
});

// Books route with a query -----------------------------

router.get('/', (req, res) => {
  // Get value from req body
  const { category } = req.query;

  // use category value
  const filteredBooks = books.filter((book) => book.category === category);

  // Send response
  res.json(filteredBooks);
});

// Post route add new book

router.post('/', (req, res) => {
  const data = req.body;

  books.bookList.push(data);

  res
    .status(201)
    .json({ message: 'Data processed successfully', books: books });
});

export default router;
