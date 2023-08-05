import { connect } from '../../../config/dbConnect';
import User from '../../../models/user';

connect();

export default async function getBooks(req, res) {
  try {
    const users = await User.find();
    // console.log(booklist);
    // res.json(booklist);
    console.log(res.json(users));
  } catch (error) {
    console.log('failed to get books');
  }
}
