import express from 'express';
import bookRoutes from './bookRoutes.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use('/books', bookRoutes);

// app.use('/static', express.static(path.join(__dirname, 'public')));

// GET routes

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// app.get('/books/:bookId', (req, res) => {
//   const { bookId } = req.params;

//   // Manipulate value

//   const idToNum = typeof bookId === 'string' ? parseInt(bookId) : NaN;

//   if (idToNum === NaN) {
//     res.status(400).json({
//       error:
//         'Invalid count query parameter. Please provide a positive integer.',
//     });
//   }
//   const addToId = idToNum + 1;
//   res.send(`Received param with value of book id: ${addToId}`);
// });

// // Post route add new book

// app.post('/books', (req, res) => {
//   const data = req.body;

//   books.bookList.push(data);

//   res
//     .status(201)
//     .json({ message: 'Data processed successfully', books: books });
// });

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
