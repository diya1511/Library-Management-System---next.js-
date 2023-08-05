import { connect } from '../../../config/dbConnect';
import Book from '../../../models/books';
// import { useRouter } from 'next/router';
connect();

export default async function getBooks(req, res) {
  // const router = useRouter();
  if (req.method === 'GET') {
    try {
      const { bookId } = req.query;

      // Assuming Book.findById(bookId) or similar function exists
      const book = await Book.findById(bookId);
      console.log(res.json(book));

      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      } else {
        return res.status(200).json(book);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(200).json({ message: 'OK' });
  }
}
