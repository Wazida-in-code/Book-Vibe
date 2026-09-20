"use client";
import BookCard from "@/components/shared/BookCard";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BookContext } from "@/context/BookContext";
import { BookType } from "@/types/bookType";
import Image from "next/image";
import React, { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { read, wishlist } = useContext(BookContext);
  const [sortBy, setSortBy] = useState<"rating"| "pages" | "year">("rating");


  const sortBooks = (books : BookType[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating"){
        sortedBooks.sort((a,b) =>  b.rating - a.rating);
    }else if(sortBy === "pages"){
        sortedBooks.sort((a,b) => b.totalPages - a.totalPages);
    }else if(sortBy === "year"){
        sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(read);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="w-11/12 mx-auto py-[20px]">
      <h2 className="bg-blue-100 text-center font-bold text-4xl rounded-md py-11">
        Listed Books
      </h2>
    <div className="text-center mt-3">
        <select 
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as "rating"| "pages" | "year")}
        defaultValue="Pick a Runtime"
        className="select select-success"
        >
            <option disabled={true}>Sort by</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number of Pages</option>
            <option value={"year"}>Published Year</option>
        </select>
    </div>


      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${read.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: BookType) => {
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
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: BookType) => {
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
