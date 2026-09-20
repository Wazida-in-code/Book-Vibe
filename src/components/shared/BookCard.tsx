import { BookType } from '@/types/bookType';
import Image from 'next/image';
import React from 'react';

interface BookProps {
    book: BookType;
}

const BookCard = ({book}: BookProps) => {
    return (
         <div
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Book Image */}
            <div className="relative bg-slate-100 p-6 flex justify-center">
                <Image
                    width={800}
                    height={600}
                    src={book.image}
                    alt={book.bookName}
                    className="h-64 w-44 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">

                {/* Title & Author */}
                <div>
                    <h2 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-600 transition">
                        {book.bookName}
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                        by <span className="font-medium text-slate-700">{book.author}</span>
                    </p>
                </div>

                {/* Rating & Pages */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-slate-700">
                            {book.rating}
                        </span>
                        <span className="text-slate-400">/ 5</span>
                    </div>

                    <span className="text-slate-500">
                        {book.totalPages} pages
                    </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100"></div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>
                        Published: <span className="font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </span>
                    </span>

                    <span>
                        {book.publisher}
                    </span>
                </div>

                {/* Button */}
                <button className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors duration-200">
                    View Details →
                </button>
            </div>
        </div>
    );
};

export default BookCard;