import { connect } from '../../../../config/dbConnect';
import Book from '../../../../models/books';

connect();

export default async function handler(req, res) {
  const { id } = req.body;
  console.log('id', id);
  if (req.method === 'DELETE') {
    try {
      const removedBook = await Book.findByIdAndRemove(id);
      if (removedBook) {
        res.json({ message: 'Book removed successfully.' });
      } else {
        res.status(404).json({ message: 'Book not found.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove the book.', error });
    }
  }
}
