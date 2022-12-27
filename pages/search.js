import React, { useState } from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import Thumbnail from "../components/Thumbnail";

const SearchPage = () => {
    const fetchURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=`;

    const [movieQuery, setMovieQuery] = useState("");
    const [results, setResults] = useState();

    const fetchData = async () => {
        const res = await fetch(fetchURL + movieQuery);
        const data = await res.json();
        setResults(data.results);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movieQuery);
        fetchData();
        setMovieQuery("");
    };
    if (!results)
        return (
            <>
                <Header />
                <div className='flex flex-col place-items-center  max-w-4xl px-8 mx-auto'>
                    <div className='flex place-items-baseline'>
                        <h1 className=' tracking-wider font-thin text-6xl mb-8 md:text-9xl uppercase'>
                            Search
                        </h1>
                        <span className='text-7xl text-bold text-red-500 animate-bounce '>
                            .
                        </span>
                        <span
                            className='text-7xl text-bold text-red-500 
                            animate-bounce'>
                            .
                        </span>
                        <span className='text-7xl text-bold text-red-500 animate-bounce '>
                            .
                        </span>
                        <span
                            className='text-7xl text-bold text-red-500 
                            animate-bounce'>
                            .
                        </span>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='grid grid-cols-1 w-full'>
                        <input
                            type='text'
                            value={movieQuery}
                            onChange={(e) => setMovieQuery(e.target.value)}
                            placeholder='Type and find your movie'
                            className='shadow-2xl rounded-t-xl px-6 py-4  text-xl outline-none text-black  placeholder:text-gray-600'
                        />
                        <button
                            type='submit'
                            className='rounded-b-xl w-full flex items-center justify-center font-bold text-gray-900 text-l bg-green-400 px-6 py-4 md:text-2xl uppercase hover:bg-green-600 '>
                            Lets Find
                        </button>
                    </form>
                </div>
            </>
        );
    else
        return (
            <div>
                <Header />
                <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center'>
                    {results?.map((result) => (
                        <Thumbnail key={result.id} result={result} />
                    ))}
                </div>
            </div>
        );
};

export default SearchPage;
