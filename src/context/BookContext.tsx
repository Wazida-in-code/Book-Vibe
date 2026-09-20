'use client';
import React, { ReactNode, useState, createContext } from 'react';


export const BookContext = createContext({});

const BooksProvider = ({children}:{children : ReactNode}) => {
    const [read, setRead] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const sharedData = {
        read, setRead, wishlist, setWishlist
    };

    return (
        <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
    );
};

export default BooksProvider;