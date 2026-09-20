"use client";
import BookCard from "@/components/shared/BookCard";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BookContext } from "@/context/BookContext";
import { BookType } from "@/types/bookType";
import Image from "next/image";
import React, { useContext } from "react";

const ListedBooksPage = () => {
  const { read, wishlist } = useContext(BookContext);

  return (
    <div className="w-11/12 mx-auto py-[20px]">
      <h2 className="bg-blue-100 text-center font-bold text-4xl rounded-md py-11">
        Listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${read.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {read.length > 0 ? (
            read.map((book: BookType) => {
              return <ListedBookCard key={book.bookId} book={book} />
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No Read Book Found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            wishlist.map((book: BookType) => {
              return <ListedBookCard key={book.bookId} book={book} />
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No Wishlist Book Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
