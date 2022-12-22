import React from "react";
import Router, { useRouter } from "next/router";
import Header from "../../components/Header";
import Image from "next/image";
import { useEffect } from "react";

const MoviesPage = (props) => {
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
    const DETAILS_URL = "https://api.themoviedb.org/3/movie/";

    const router = useRouter();

    const result = JSON.parse(router.query.result);

    console.log(result);
    return (
        <>
            <Header />

            <div className='container mx-auto  grid grid-cols-1 p-4 gap-4 md:grid-cols-2'>
                <Image
                    priority
                    className='w-full'
                    layout='responsive'
                    alt={result?.title || result?.original_name}
                    height={480}
                    width={720}
                    src={`${BASE_IMG_URL}${result?.poster_path} `}
                />
                <div>
                    <Image
                        priority
                        className='rounded-3xl w-full hover:scale-125 overflow-hidden transition-all ease-in-out duration-300'
                        layout='responsive'
                        alt={result?.title || result?.original_name}
                        height={480}
                        width={720}
                        src={
                            `${BASE_IMG_URL}${result?.backdrop_path}` ||
                            `${BASE_IMG_URL}${result?.poster_path} `
                        }
                    />

                    <div className='px-8 py-4 rounded-3xl text-left bg-[rgba(169,169,169,0.22)] grid place-content-center shadow-xl '>
                        <div className='flex place-content-center flex-wrap gap-2  font-bold font-mono p-4'>
                            {result?.vote_average && (
                                <span className='px-4 py-2 bg-black rounded-full inline-block '>
                                    Average Rating: {result?.vote_average}
                                </span>
                            )}
                            {result?.original_language && (
                                <span className='px-4 py-2 bg-black rounded-full inline-block'>
                                    Language: {result?.original_language}
                                </span>
                            )}
                            {result?.release_date && (
                                <span className='px-4 py-2 bg-black rounded-full inline-block'>
                                    Release Date: {result?.release_date}
                                </span>
                            )}
                            {result?.popularity && (
                                <span className='px-4 py-2 bg-black rounded-full inline-block'>
                                    Popularity: {result?.popularity}
                                </span>
                            )}
                        </div>

                        <h2 className='mt-4 text-3xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
                            {result?.title || result?.original_name}
                        </h2>
                        <p className='my-4 '>{result?.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviesPage;
