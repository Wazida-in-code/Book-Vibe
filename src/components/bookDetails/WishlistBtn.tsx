'use client'
import { BookContext } from '@/context/BookContext';
import { BookType } from '@/types/bookType';
import React, { useContext } from 'react';

const WishlistBtn = ({book}:{book:BookType}) => {
    const {wishlist, setWishlist} = useContext(BookContext)

    const handleWishbtn = () => {
        setWishlist([...wishlist, book])
        alert(`"${book.bookName}" added successfully in wishlist`)
    }
    return (
         <button onClick={() => handleWishbtn()} className="btn btn-outline border-slate-300 hover:bg-slate-100">
            ❤️Wishlist
         </button>
    );
};

export default WishlistBtn;