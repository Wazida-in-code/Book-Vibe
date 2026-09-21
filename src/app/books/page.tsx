import React from 'react';
import { BookType } from '@/types/bookType';
import BookCard from '@/components/shared/BookCard';

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
            
            <h2 className='text-3xl font-bold text-center mb-8 text-slate-800 md:text-4xl'>Explore All Books</h2>

<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {booksData.map((book: BookType) => {
      return <BookCard key={book.bookId} book={book} />
    })}
</div>
        </section>
    );
};

export default Books;