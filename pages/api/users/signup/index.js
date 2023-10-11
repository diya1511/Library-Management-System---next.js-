import bcryptjs from 'bcryptjs';
import { connect } from '../../../../config/dbConnect';
import User from '../../../../models/user';
export default async function handler(req, res) {
  try {
    await connect();
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'user already exist' });
    }
    //hash [password]
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return res
      .status(201)
      .json({ message: 'user created successfully', savedUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
