import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from './nav';
import bookImg from '../img/book.jpeg';
import { connect } from '../config/dbConnect';
import { useRouter } from 'next/router';
connect();

export default function Books({ books }) {
  // const [books, setBooks] = useState([]);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [token, setToken] = useState(null);
  const router = useRouter();
  const [islogin, setIsLogin] = useState(false);
  const handleadd = () => {
    router.push('books/add');
  };
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Navbar />
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
      <div className="flex flex-wrap flex-row ">
        {books.map((book) => {
          return (
            <div class="flex flex-col gap-10 p-10 ">
              <div class="flex gap-10">
                <div class="group flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ">
                  <Image
                    src={bookImg}
                    class="transition-all duration-300 group-hover:opacity-90 w-[260px] h-[180px] "
                  />
                  <div class="flex flex-col gap-4 p-4">
                    <h3 class="text-2xl font-semibold">Title: {book.title}</h3>
                    <p class="text-base">Author: {book.author}</p>
                    <Link
                      href={`books/${book._id}`}
                      class="w-[100px] justify-center rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700"
                    >
                      Know More
                    </Link>
                    {islogin && (
                      <div className="flex flex-row px-6">
                        <Link
                          href={{
                            pathname: `books/edit`,
                            query: { id: book._id },
                          }}
                          class="w-[80px] h-[40px]  bg-yellow-600 px-6 py-2 text-white shadow-xl transition-all duration-300 hover:bg-yellow-700"
                        >
                          Edit
                        </Link>
                        <Link
                          href={{
                            pathname: `books/delete`,
                            query: { id: book._id },
                          }}
                          class="w-[80px] h-[40px] bg-red-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-red-700"
                        >
                          Delete
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const books = await res.json();
  return { props: { books } };
};
