'use client';
import { connect } from '../../../../config/dbConnect';
import User from '../../../../models/user';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import cookie from 'cookie';

export default async function handlerlogin(req, res) {
  try {
    await connect();
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ error: 'User not found' });
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    //create tokenData
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
      })
    );
    const response = {
      id: user._id,
      name: user.name,
      email: user.email,
      token,
      isAdmin: user.isAdmin,
    };
    return res.status(200).json({
      message: 'login successful',
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
