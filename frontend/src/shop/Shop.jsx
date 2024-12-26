import { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/all-books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className="text-5xl font-bold text-center">
        All Books are here
      </h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 grid-cols-1">
        {
          books.map( book => <Card key={book} href="#" className="max-w-sm">
            <img src={book.imageURL} alt={book.bookTitle} className="object-cover w-full h-64" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.authorName}
            </p>
            <p className="text-gray-900 dark:text-white">
              {book.bookDescription}</p>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop