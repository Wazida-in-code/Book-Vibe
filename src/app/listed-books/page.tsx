'use client'
import { BookContext } from '@/context/BookContext';
import React, { useContext } from 'react';

const ListedBooksPage = () => {
    const {read} = useContext(BookContext)
    console.log(read, "LLL");
    return (
        <div>
            helelele
        </div>
    );
};

export default ListedBooksPage;