import { BookType } from "@/types/bookType";
import Image from "next/image";
import React from "react";

interface BookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: BookDetailsProps) => {
  const { id } = await params;
  const bookData = await getBooks();

  const book = bookData.find(
    (book: BookType) => String(book.bookId) === String(id),
  ) as BookType;
  console.log(book);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border border-slate-200 w-11/12 max-w-6xl mx-auto overflow-hidden">
      {/* Book Image */}
      <figure className="lg:w-2/5 bg-gradient-to-br from-slate-100 to-emerald-50 p-8">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={700}
          className="w-full max-w-sm h-[420px] object-cover rounded-xl shadow-lg"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-3/5 p-6 md:p-8">
        {/* Category */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
            {book.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mt-2">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-slate-500">
          Written by{" "}
          <span className="font-semibold text-slate-700">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-bold text-slate-800">{book.rating}</span>
            <span className="text-slate-400">/ 5</span>
          </div>

          <span className="text-slate-300">|</span>

          <span className="text-slate-500">{book.totalPages} pages</span>
        </div>

        {/* Review */}
        <div className="mt-4">
          <h3 className="font-bold text-lg text-slate-800 mb-2">
            About the Book
          </h3>

          <p className="text-slate-600 leading-7 text-sm md:text-base">
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
          <div>
            <p className="text-xs text-slate-400 uppercase">Publisher</p>
            <p className="font-semibold text-slate-700">{book.publisher}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400 uppercase">Published</p>
            <p className="font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400 uppercase">Pages</p>
            <p className="font-semibold text-slate-700">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400 uppercase">Category</p>
            <p className="font-semibold text-slate-700">{book.category}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="card-actions mt-4">
          <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-7">
            Read
          </button>

          <button className="btn btn-outline border-slate-300 hover:bg-slate-100">
            ❤️Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
