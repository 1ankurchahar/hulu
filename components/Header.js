import Image from "next/image";
import {
    HomeIcon,
    BoltIcon,
    CheckBadgeIcon,
    BuildingLibraryIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <header className='flex flex-col m-5 sm:flex-row justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl  '>
                <HeaderItem Icon={HomeIcon} title='Home' />
                <HeaderItem Icon={BoltIcon} title='Trending' />
                <HeaderItem Icon={CheckBadgeIcon} title='Verified' />
                <HeaderItem Icon={BuildingLibraryIcon} title='Collections' />
                <HeaderItem Icon={MagnifyingGlassIcon} title='Search' />
                <HeaderItem Icon={UserIcon} title='Account' />
            </div>
            <Image
                onClick={() => router.push("/login")}
                className='object-contain hover:animate-pulse cursor-pointer'
                alt=''
                width={200}
                height={100}
                src='/hulu-logo.svg'
            />
        </header>
    );
};

export default Header;
