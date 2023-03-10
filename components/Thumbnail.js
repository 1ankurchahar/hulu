import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Router, { useRouter } from "next/router";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

const Thumbnail = ({ result }) => {
    const router = useRouter();

    const {
        id,
        title,
        original_name,
        backdrop_path,
        poster_path,
        overview,
        media_type,
        release_date,
        first_air_date,
        vote_count,
    } = result;

    const handleClick = () => {
        router.push(`/movie/${id}`);
    };
    return (
        <div
            onClick={handleClick}
            className='group  p-4 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image
                priority
                className='rounded-3xl'
                layout='responsive'
                alt={title || original_name}
                height={480}
                width={720}
                src={
                    BASE_IMG_URL +
                    (backdrop_path == null ? poster_path : backdrop_path)
                }
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {title || original_name}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {media_type && `${media_type} . `}
                    {release_date || first_air_date} .
                    <HandThumbUpIcon className='h-5 mx-2' /> {vote_count}
                </p>
            </div>
        </div>
    );
};

export default Thumbnail;
