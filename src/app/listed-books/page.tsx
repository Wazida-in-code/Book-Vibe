'use client'
import { BookContext } from '@/context/BookContext';
import React, { useContext } from 'react';

const ListedBooksPage = () => {
    const {read, wishlist} = useContext(BookContext)
    console.log(read,wishlist, "LLL", "www");
    return (
        <div>
            helelele
        </div>
    );
};

export default ListedBooksPage;