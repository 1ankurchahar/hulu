import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Router, { useRouter } from "next/router";

const Thumbnail = ({ result }) => {
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
    const router = useRouter();

    const handleClick = () => {
        // router.push(
        //     {
        //         pathname: `/movies/${result.title || result.original_name}`,
        //         query: {
        //             result: JSON.stringify(result),
        //         },
        //     },
        //     `/movies/${result.title || result.original_name}`,
        // );
        // console.log(result);

        router.push(`/movie/${result.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className='group  p-4 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image
                priority
                className='rounded-3xl'
                layout='responsive'
                alt={result.title || result.original_name}
                height={480}
                width={720}
                src={
                    `${BASE_IMG_URL}${result.backdrop_path}` ||
                    `${BASE_IMG_URL}${result.poster_path} `
                }
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {result.title || result.original_name}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} . `}
                    {result.release_date || result.first_air_date} .
                    <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                </p>
            </div>
        </div>
    );
};

export default Thumbnail;
