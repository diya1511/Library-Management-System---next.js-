import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../nav';
import { connect } from '../../config/dbConnect';
import { useRouter } from 'next/router';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
// await connect();
export default function Books({ books }) {
  const router = useRouter();
  const [islogin, setIsLogin] = useState(false);
  const handleadd = () => {
    router.push('books/add');
  };
  useEffect(() => {
    // await connect();
    if (localStorage.getItem('isLoggedIn')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Available Books
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Something short and leading about books below—its contents, the
                author, etc. Books gives use knowledge
              </Typography>
              {islogin && (
                <div className="flex justify-center mt-6">
                  <button
                    className="bg-red-500 h-[40px] text-white px-4 py-2 rounded-md"
                    onClick={handleadd}
                  >
                    Add Book
                  </button>
                </div>
              )}
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {books.map((book) => (
                <Grid item key={book._id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://source.unsplash.com/random?books"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        <Link
                          href={`books/${book._id}`}
                        >{`${book.title}`}</Link>
                      </Typography>
                      <Typography>{`${book.author}`}</Typography>
                    </CardContent>
                    {islogin && (
                      <CardActions>
                        <Link
                          href={{
                            pathname: `books/edit/${book._id}`,
                          }}
                          size="small"
                        >
                          Edit{' '}
                        </Link>
                        <Link
                          href={{
                            pathname: `books/delete`,
                            query: { id: book._id },
                          }}
                          size="small"
                        >
                          Delete
                        </Link>
                      </CardActions>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            MADE WITH LOVE !!
          </Typography>
          {/* <Copyright /> */}
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('library-management-system-next-js.vercel.app/api/books');
  const books = await res.json();
  return { props: { books } };
};
