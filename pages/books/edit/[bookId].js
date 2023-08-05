// components/UpdateBook.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
function UpdateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [genres, setGenres] = useState('');
  const router = useRouter();
  const { bookId } = router.query; // Retrieve the id from the query parameter

  useEffect(() => {
    if (bookId) {
      updateBooks();
    }
  }, [bookId]);
  const updateBooks = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/books/${bookId}`);
      const data = await response.json();
      console.log(data);
      const { title, author, excerpt, content, genres } = data;
      setTitle(title);
      setAuthor(author);
      setExcerpt(excerpt);
      setContent(content);
      setGenres(genres);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const id = router.query.bookId;
    try {
      await axios.put(`/api/books/edit/${id}`, {
        id,
        title,
        author,
        excerpt,
        content,
        genres,
      });
      router.push('/books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <>
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Edit Book
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Add Correct Information !
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="Title"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div class="mt-2">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Author
            </label>
            <div class="mt-2">
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Content
            </label>
            <div class="mt-2">
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Excerpt
            </label>
            <div class="mt-2">
              <input
                type="text"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Genres
            </label>
            <div class="mt-2">
              <input
                type="text"
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 h-[40px] text-white px-4 py-2 rounded-md"
          onClick={handleUpdate}
        >
          Update Book
        </button>
      </div>
    </>
  );
}

export default UpdateBook;
