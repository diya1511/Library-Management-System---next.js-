import { connect } from '../../../config/dbConnect';
import Book from '../../../models/books';

export default async function getBooks(req, res) {
  if (req.method === 'GET') {
    try {
      await connect();
      const { bookId } = req.query;
      const book = await Book.findById(bookId);

      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }

      return res.status(200).json(book);
    } catch (error) {
      console.error('Error fetching book:', error);
      return res.status(500).json({ message: 'Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
