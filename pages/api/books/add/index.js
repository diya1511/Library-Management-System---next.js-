import { connect } from '../../../../config/dbConnect';
import Book from '../../../../models/books';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connect();

      const { title, author, excerpt, content, genres } = req.body;

      const newBook = new Book({
        title,
        author,
        excerpt,
        content,
        genres,
      });

      await newBook.save();

      res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
