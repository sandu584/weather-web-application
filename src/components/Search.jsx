import React, { useContext, useState } from 'react'
import { TbCloudSearch } from "react-icons/tb";
import WeatherContext from '../contexts/weatherContext';

const Search = () => {
    const [place, setPlace] = useState("");
    const { setCity } = useContext(WeatherContext);

    const submitHandler = (e) => {
        e.preventDefault();
        setCity(place);
        setPlace("");
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <form onSubmit={submitHandler} className='w-full h-full flex justify-center items-center'>
                <input
                    type="text"
                    className='lg:w-2/5 w-3/4 md:w-1/2 transition-all h-12 rounded-s-full bg-white text-black text-center text-xl font-bold capitalize focus:outline-none'
                    placeholder='Press TAB to Search...'
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                />
                <TbCloudSearch
                    className='bg-slate-500 text-white h-12 w-12 px-2 rounded-e-full hover:cursor-pointer'
                    onClick={submitHandler}
                />
            </form>
        </div>
    )
}

export default Search
