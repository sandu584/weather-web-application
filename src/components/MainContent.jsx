import React, { useContext, useEffect } from 'react'
import Card from './Card'
import { TbUvIndex } from "react-icons/tb";
import { TbTemperatureSun } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiThermometerHot } from "react-icons/gi";
import WeatherContext from '../contexts/weatherContext';
import useWeather from '../hooks/useWeather';

const MainContent = () => {

    const { data, setData, city } = useContext(WeatherContext);

    if(data.error) return <h1 className='text-center text-6xl font-semibold h-1/2 flex justify-center items-center text-white'>Please enter the City name correctly...</h1>

    return (
        <div className='h-auto w-full sm:h-auto md:h-auto lg:h-full text-white flex flex-col justify-between items-center'>
            <div className='h-1/2 flex justify-around items-center w-full sm:mt-4'>
                <div>
                    <h1 className='text-5xl sm:text-5xl md:text-4xl lg:text-8xl font-bold' style={{ fontFamily: 'sans-serif' }}>{data?.location?.name}</h1>
                </div>
                <img src={data?.current?.condition?.icon} alt="" className='w-36'/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl sm:text-4xl md:text-4xl lg:text-8xl font-bold' style={{ fontFamily: 'sans-serif' }}>{data?.current?.temp_c}&deg;c</h1>
                    <p className='text-2xl mt-2'>{data?.current?.condition?.text}</p>
                </div>
            </div>
            <div className='h-1/2 w-9/10 sm:w-4/5 flex justify-around p-12 items-center sm:flex-wrap flex-wrap'>
                <Card heading="Feels Like" icon={<TbTemperatureSun className='text-5xl' />} value={data?.current?.feelslike_c} />
                <Card heading="UV" icon={<TbUvIndex className='text-5xl' />} value={data?.current?.uv} />
                <Card heading="Heat Index" icon={<GiThermometerHot className='text-5xl' />} value={data?.current?.heatindex_c} />
                <Card heading="Humidity" icon={<WiHumidity className='text-5xl' />} value={data?.current?.humidity} />
            </div>
        </div>
    )
}

export default MainContent
