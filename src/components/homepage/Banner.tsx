import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <section className="py-10 md:py-16">
            <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-gradient-to-br from-slate-100 via-white to-emerald-50 rounded-3xl p-6 md:p-12 shadow-sm border border-slate-200">

                {/* Content */}
                <div className="space-y-6 text-center md:text-left">
                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                        📚 Discover Your Next Read
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800">
                        Books to freshen up
                        <span className="block text-emerald-600">
                            your bookshelf
                        </span>
                    </h1>

                    <p className="text-slate-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
                        Explore amazing books, discover new stories, and
                        find your next favorite read.
                    </p>

                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none px-7">
                        View The List →
                    </button>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-200/40 blur-3xl rounded-full"></div>

                        <Image
                            src={bannerImg}
                            alt="Books"
                            className="relative w-full max-w-md rounded-2xl object-contain drop-shadow-xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};


export default Banner;