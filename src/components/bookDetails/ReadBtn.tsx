'use client'
import { BookContext } from '@/context/BookContext';
import { BookType } from '@/types/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadBtn = ({book}:{book:BookType}) => {
    const {read, setRead} = useContext(BookContext)

    const handleReadBtn = () => {
        setRead([...read, book])
        toast.success(`You have read "${book.bookName}"`)
    }
    return (
        <button onClick={() => handleReadBtn()} className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-7">
            Read
          </button>
    );
};

export default ReadBtn;