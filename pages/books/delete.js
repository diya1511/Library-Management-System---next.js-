// import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
export default function RemoveBook() {
  //   const [bookId, setBookId] = useState('');
  const router = useRouter();
  const handleRemoveBook = async (e) => {
    e.preventDefault();
    const { id } = router.query;
    // console.log(id);
    // const bookId = id;
    e.preventDefault();
    try {
      await axios.delete(
        `library-management-system-next-js.vercel.app/api/books/delete`,
        {
          data: { id },
        }
      );
      console.log('Book deleted successfully');
      router.push('/books');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        className="bg-red-500 h-[40px] text-white px-4 py-2 rounded-md"
        onClick={handleRemoveBook}
      >
        Are you Confirm?
      </button>
    </div>
  );
}
