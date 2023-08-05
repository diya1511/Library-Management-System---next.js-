import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please supply a name',
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Please Supply an email address',
  },
  password: {
    type: String,
    required: 'Please Supply password',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
