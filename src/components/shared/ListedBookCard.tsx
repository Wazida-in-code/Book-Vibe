import { BookType } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({book} : {book: BookType}) => {
    return (
        <div className="w-full bg-white items-center my-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Book Image */}
                  <div className="sm:w-[400px] md:w-56 bg-slate-100 flex items-center justify-center p-5">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={180}
                      height={260}
                      className="w-36 sm:w-full h-52 sm:h-60 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Book Information */}
                  <div className="flex-1 p-5 md:p-7 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        {book.category}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-slate-800 mt-3">
                        {book.bookName}
                      </h2>

                      {/* Author */}
                      <p className="text-sm text-slate-500 mt-1">
                        by{" "}
                        <span className="font-semibold text-slate-700">
                          {book.author}
                        </span>
                      </p>

                      {/* Review */}
                      <p className="text-slate-600 text-sm leading-6 mt-4 line-clamp-2">
                        {book.review}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap items-center gap-5 mt-5 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-400 text-lg">★</span>
                          <strong>{book.rating}</strong>
                        </span>

                        <span className="text-slate-400">
                          {book.totalPages} pages
                        </span>

                        <span className="text-slate-400">
                          {book.yearOfPublishing}
                        </span>

                        <span className="text-slate-400">{book.publisher}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-slate-100">
                      <Link href={`/books/${book.bookId}`}>
                        <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6">
                        View Details
                      </button>
                      </Link>

                      <button className="btn btn-outline border-slate-300">
                        ❤️ Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default ListedBookCard;