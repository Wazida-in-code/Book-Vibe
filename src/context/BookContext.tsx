'use client';
import { BookType } from '@/types/bookType';
import React, { ReactNode, useState, createContext } from 'react';

interface BookContextType {
    read: BookType[];
    setRead: React.Dispatch<React.SetStateAction<BookType[]>>;
    wishlist: BookType[];
    setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const BookContext = createContext<BookContextType>({
    read: [],
    setRead: () => {},
    wishlist: [],
    setWishlist: () => {}
});

const BooksProvider = ({children}:{children : ReactNode}) => {
    const [read, setRead] = useState<BookType[]>([]);
    const [wishlist, setWishlist] = useState<BookType[]>([]);

    const sharedData = {
        read, setRead, wishlist, setWishlist
    };

    return (
        <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
    );
};

export default BooksProvider;