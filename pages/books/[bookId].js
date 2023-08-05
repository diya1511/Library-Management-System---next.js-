export default function book({ book }) {
  return (
    <>
      <div className="flex items-center justify-center w-full py-8">
        {/* Card code block start */}
        <div className="bg-white dark:bg-gray-800 shadow rounded">
          <div className="relative">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              alt
            />
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
              <div className="flex items-center">
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 text-gray-200 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
              </div>
            </div>
            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className="xl:pr-16 w-full xl:w-2/3">
                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                  <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                    {`${book.title}`}
                  </h2>
                  <div className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                    BestSeller
                  </div>
                </div>
                <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                  {`${book.content}`}
                </p>
              </div>
              <div className="xl:px-10 w-full py-5 flex items-start justify-center xl:w-1/3">
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    {` ${book.author}`}
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                    Author
                  </p>
                </div>
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    {`${book.genres}`}
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                    Genres
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    {`${book.excerpt}`}
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                    Excerpt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card code block end */}
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/books');
  const data = await response.json();
  const paths = data.map((book) => {
    return {
      params: {
        bookId: `${book._id}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3000/api/books/${params.bookId}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      book: data,
    },
  };
}
