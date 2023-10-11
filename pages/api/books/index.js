import { connect } from '../../../config/dbConnect';
import Book from '../../../models/books';

export default async function getBooks(req, res) {
  try {
    await connect(); // Establish the database connection

    if (req.method === 'GET') {
      // Fetch all books from the database
      const booklist = await Book.find();

      // Respond with the list of books
      res.status(200).json(booklist);
    } else {
      // Respond with a 405 Method Not Allowed for other HTTP methods
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error('Failed to get books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
