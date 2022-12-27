import React from "react";
import Image from "next/image";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
const DETAILS_URL = "https://api.themoviedb.org/3/movie/";
const TRAILER_URL = "https://api.themoviedb.org/3/movie/";

const MovieDetails = ({ data }) => {
    const {
        title,
        original_name,
        tagline,
        overview,
        vote_average,
        backdrop_path,
        status,
        release_date,
        budget,
        runtime,
        popularity,
        original_language,
        genres,
        production_companies,
        homepage,
        poster_path,
    } = data;

    const movieRating = String(vote_average).slice(0, 3);
    const getMovieRatingColor = () => {
        if (+movieRating >= 8) return "bg-green-800 p-2 rounded-full";
        else if (+movieRating < 8 && +movieRating > 5)
            return "bg-yellow-500 p-2 rounded-full  ";
        else return "bg-red-500 p-2 rounded-full  ";
    };

    console.log();
    return (
        <div className='container mx-auto p-4 md:p-8 text-white bg-gray-800 bg-opacity-60 rounded-3xl'>
            <div className='relative'>
                <div className='absolute top-4 left-2  z-10 text-xl p-2 text-white font-bold'>
                    <span className={getMovieRatingColor()}>{movieRating}</span>
                </div>
                <Image
                    priority
                    className='rounded-3xl w-full md:h-1  overflow-hidden '
                    layout='responsive'
                    alt={title || original_name}
                    height={480}
                    width={720}
                    src={
                        BASE_IMG_URL +
                        (backdrop_path == null ? poster_path : backdrop_path)
                    }
                />
            </div>

            <div className='my-4 py-4'>
                <h1 className='font-semibold text-2xl sm:text-4xl md:text-6xl '>
                    {title}
                </h1>
                <h2 className='tracking-widest text-xl sm:text-2xl md:text-3xl text-gray-200 my-2  '>
                    {tagline}
                </h2>
                <p className='leading-relaxed  text-base sm:text-xl md:text-2xl'>
                    {overview}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <DetailsTag title='status' value={status} />
                <DetailsTag title='release_date' value={release_date} />
                <DetailsTag title='movieRating' value={movieRating} />
                <DetailsTag title='Budget' value={budget} />
                <DetailsTag title='runtime' value={runtime} />
                <DetailsTag
                    title='original_language'
                    value={original_language}
                />
                <DetailsTag title='Popularity' value={Math.floor(popularity)} />
                <DetailsTag title='homepage' value={homepage} />

                <DetailsTag
                    title='Genres'
                    value={genres?.map((genre) => (
                        <p key={genre?.id}>{genre?.name}</p>
                    ))}
                />
            </div>

            <div className='my-4 '>
                <h2 className='text-xl uppercase font-bold text-center mb-8'>
                    production_companies
                </h2>
                <div className='flex justify-center gap-2 mb-4 overflow-x-scroll place-content-cente scrollbar-hide'>
                    {production_companies?.map((prodComp) => (
                        <div
                            key={prodComp.id}
                            className='h-60 w-60 my-4 flex flex-shrink-0 flex-col align-middle justify-center place-items-center mr-4 bg-slate-300 bg-opacity-50 rounded-3xl p-1 ring-4 ring-slate-200 '>
                            <Image
                                className='h-24 w-2h-24 bg-white'
                                src={BASE_IMG_URL + prodComp?.logo_path}
                                alt={prodComp?.name}
                                height={100}
                                width={100}
                            />
                            <p className='p-2 my-2 w-4/5 text-xl text-center'>
                                {prodComp?.name}
                            </p>
                            <p>{prodComp?.origin_country}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

const DetailsTag = ({ title, value }) => {
    return (
        <div className='flex gap-2 mb-4 text-left justify-between shadow-xl px-2 py-4'>
            <h2 className='text-xl md:text-2xl uppercase font-bold mr-2'>
                {title}:
            </h2>
            <p className='md:whitespace-nowrap truncate md:text-xl px-4 text-center bg-slate-300 bg-opacity-50 rounded-3xl p-1 ring-4 ring-slate-200  '>
                {value}
            </p>
        </div>
    );
};
