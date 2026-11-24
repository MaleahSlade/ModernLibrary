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
export default router;