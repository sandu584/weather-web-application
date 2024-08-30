import React, { useContext } from 'react'
import Card from './Card';
import { TbCircleLetterCFilled } from "react-icons/tb";
import { TbCircleLetterNFilled } from "react-icons/tb";
import { TbCircleLetterOFilled } from "react-icons/tb";
import { TbCircleLetterSFilled } from "react-icons/tb";
import WeatherContext from '../contexts/weatherContext';

const AirQualityIndex = () => {

    const {data} = useContext(WeatherContext);

    return (
        <div className='h-auto w-full flex flex-col mt-4 justify-center items-center pb-8'>
            <h1 className='text-white text-6xl mb-10 underline font-semibold'>Air Quality Index</h1>
            <div className='h-1/2 w-4/5 flex justify-around items-center flex-wrap lg:flex-nowrap'>
                <Card heading="CO" icon={<TbCircleLetterCFilled className='text-5xl' />} value={data?.current?.air_quality?.co} />
                <Card heading="NO2" icon={<TbCircleLetterNFilled className='text-5xl' />} value={data?.current?.air_quality?.no2} />
                <Card heading="O3" icon={<TbCircleLetterOFilled className='text-5xl' />} value={data?.current?.air_quality?.o3} />
                <Card heading="SO2" icon={<TbCircleLetterSFilled className='text-5xl' />} value={data?.current?.air_quality?.so2} />
            </div>
        </div>
    )
}

export default AirQualityIndex;