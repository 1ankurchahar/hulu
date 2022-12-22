import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Youtube from "react-youtube";
import Header from "../../components/Header";
import Image from "next/image";
import MovieDetails from "../../components/MovieDetails";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
const DETAILS_URL = "https://api.themoviedb.org/3/movie/";
const TRAILER_URL = "https://api.themoviedb.org/3/movie/";

const SingleMovie = () => {
    const [movierData, setMovierData] = useState();

    const [videos, setVideos] = useState([]);
    const trailers = videos.filter((video) => video.type === "Trailer");
    const trailer = trailers.slice(0, 1);
    console.log(trailer);

    const youtubeOptions = {
        height: "450",
        width: "100%",
    };

    const router = useRouter();
    const ID = router.query.id || router.asPath.split("/")[2];

    useEffect(() => {
        fetchMovieDetails();
        fetchTrailer();
    }, [ID, TRAILER_URL, BASE_IMG_URL, DETAILS_URL]);

    const fetchMovieDetails = async () => {
        try {
            const res = await fetch(
                `${DETAILS_URL}${ID}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            );
            const data = await res.json();
            setMovierData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTrailer = async () => {
        try {
            const res = await fetch(
                `${TRAILER_URL}${ID}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            );
            const data = await res.json();
            setVideos(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const bg_poster_img_path = BASE_IMG_URL + movierData?.poster_path;

    if (!movierData) return "Loading...";
    else
        return (
            <div>
                <Header />
                <div
                    className='bg-cover bg-center bg-no-repeat min-h-screen'
                    style={{
                        backgroundImage: `url(${bg_poster_img_path})`,
                    }}>
                    <MovieDetails data={movierData} />

                    {/* trailer */}
                    <div
                        className='container p-8 my-8 overflow-hidden mx-auto flex  justify-evenly  first-letter:
                      bg-gray-800 bg-opacity-40 rounded-3xl
                    '>
                        {trailer &&
                            trailer.map((item) => {
                                return (
                                    <Youtube
                                        className=' w-full  md:w-3/4 h-auto'
                                        key={item.key}
                                        videoId={item.key}
                                        opts={youtubeOptions}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        );
};

export default SingleMovie;
