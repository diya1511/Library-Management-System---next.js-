import { serialize } from 'cookie';
import { login, logout, isLoggedIn } from '../../../../context/auth';
export default function logoutHandler(req, res) {
  try {
    console.log('logout1');
    // const newToken = '';
    // const cookieOptions = {
    //   httpOnly: true,
    //   maxAge: 0,
    // };
    // logout();
    // res.setHeader('Set-Cookie', serialize('token', newToken, cookieOptions));
    res.status(200).json({ message: 'Logout' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
