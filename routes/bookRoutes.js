import express from 'express';
import Book from '../models/Book.js';
const router = express.Router();
// CREATE - POST /api/books
router.post('/', async (req, res) => {
try {
const book = await Book.create(req.body);
res.status(201).json(book);
} catch (error) {
res.status(400).json({ message: error.message });
}
});
// READ ALL - GET /api/books
router.get('/', async (req, res) => {
try {
const books = await Book.find();
res.status(200).json(books);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// READ ONE - GET /api/books/:id
router.get('/:id', async (req, res) => {
try {
const book = await Book.findById(req.params.id);
if (!book) {
return res.status(404).json({ message: 'Book not found' });
}
res.status(200).json(book);
} catch (error) {
res.status(400).json({ message: error.message });
}
});

// UPDATE - PUT /api/books/:id
router.put('/:id', async (req, res) => {
try {
const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
new: true,
runValidators: true,
});
if (!book) {
return res.status(404).json({ message: 'Book not found' });
}
res.status(200).json(book);
} catch (error) {
res.status(400).json({ message: error.message });
}
});
// DELETE - DELETE /api/books/:id
router.delete('/:id', async (req, res) => {
try {
const book = await Book.findByIdAndDelete(req.params.id);
if (!book) {
return res.status(404).json({ message: 'Book not found' });
}
res.status(200).json({ message: 'Book deleted successfully', id: book._id });
} catch (error) {
res.status(400).json({ message: error.message });
}
});


export default router;