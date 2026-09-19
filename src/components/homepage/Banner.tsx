import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <section className='py-20'>
            <div className='grid grid-cols-2 gap-4 w-11/12 mx-auto items-center bg-slate-200 rounded-2xl p-8'>
                <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success'>View The List</button>
                </div>

                <div>
                    <Image src={bannerImg} alt='banner' />
                </div>
            </div>
        </section>
    );
};

export default Banner;