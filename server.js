import 'dotenv/config';
import express from 'express';
import connectDB from './db/connection.js';
import bookRoutes from './routes/bookRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware: parse JSON request bodies into req.body
app.use(express.json());
// Mount the book router
app.use('/api/books', bookRoutes);
const startServer = async () => {
await connectDB();
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
};
startServer();