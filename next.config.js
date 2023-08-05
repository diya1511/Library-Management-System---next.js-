/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI:
      'mongodb+srv://library:library@cluster0.snhvij7.mongodb.net/?retryWrites=true&w=majority/test',
  },
  api: {
    bodyParser: false,
  },
  matcher: ['/', '/librarian', '/login', '/signup'],
  reactStrictMode: true,
};

module.exports = nextConfig;
