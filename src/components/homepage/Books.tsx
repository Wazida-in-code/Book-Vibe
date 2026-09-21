import React from 'react';
import BookCard from '../shared/BookCard';
import { BookType } from '@/types/bookType';

const getBooks = async() => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json()
        return data;
    }catch(error){
        console.error("Error fatching books data:", error);
        return[]
    }
}

const Books = async () => {
    const booksData = await getBooks();
    console.log(booksData, "Data");
    return (
        <section className='w-11/12 mx-auto my-[70px]'>
            Book Page

<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
    {booksData.slice(0,3).map((book: BookType) => {
      return <BookCard key={book.bookId} book={book} />
    })}
</div>
        </section>
    );
};

export default Books;