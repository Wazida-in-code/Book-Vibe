import React from 'react';
import BookCard from '../shared/BookCard';
import { BookType } from '@/types/bookType';

const getBooks = async() => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json()
    return data;
}

const Books = async () => {
    const booksData = await getBooks();
    console.log(booksData, "Data");
    return (
        <section className='w-11/12 mx-auto my-[70px]'>
            Book Page

<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {booksData.map((book: BookType) => {
      return <BookCard key={book.bookId} book={book} />
    })}
</div>
        </section>
    );
};

export default Books;