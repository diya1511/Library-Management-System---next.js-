import { connect } from '../../../config/dbConnect';
import Book from '../../../models/books';

connect();

export default async function getBooks(req, res) {
  try {
    if (req.method === 'GET') {
      const booklist = await Book.find();
      res.status(200).json(booklist);
      console.log(res.json(booklist));
    } else {
      res.stauts(404).json({ 'books not found': booklist });
    }
  } catch (error) {
    console.log('failed to get books');
  }
}
