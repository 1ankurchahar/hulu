import { useRouter } from "next/router";

const HeaderItem = ({ Icon, title }) => {
    const router = useRouter();

    const handleClick = () => {
        if (title === "Account") router.push("/login");
        else if (title === "Search") router.push("/search");
        else if (title === "Trending") router.push("/?genre=fetchTreanding");
        else if (title === "Verified") router.push("/?genre=fetchTopRated");
        else if (title === "Collections") router.push("/?genre=fetchMystery");
        else return router.push("/");
    };

    return (
        <div
            onClick={handleClick}
            className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className=' h-12 mb-1 group-hover:animate-bounce' />
            <p className='text-sm tracking-widest opacity-0 group-hover:opacity-100'>
                {title}
            </p>
        </div>
    );
};

export default HeaderItem;
