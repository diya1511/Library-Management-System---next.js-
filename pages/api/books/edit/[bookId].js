// pages/api/books/update.js

import { connect } from '../../../../config/dbConnect';
import Book from '../../../../models/books';

connect();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id, title, author, excerpt, content, genres } = req.body;

      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, excerpt, content, genres },
        { new: true }
      );

      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }

      res.status(200).json({
        message: 'Book updated successfully',
        updatedBook,
      });
      alert('Book updated successfully');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
