import React, { useContext } from 'react'
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { WiMoonrise } from "react-icons/wi";
import { WiMoonset } from "react-icons/wi";
import RectCard from './RectCard';
import { TbWind } from "react-icons/tb";
import { GiCompass } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import { BsCloudsFill } from "react-icons/bs";
import Card from './Card';
import WeatherContext from '../contexts/weatherContext';


const MoreInfo = () => {

    const { data } = useContext(WeatherContext);

    return (
        <div className='h-auto md:h-screen w-full flex flex-col justify-center items-center'>
            <div className='w-full h-auto md:h-1/2 flex justify-around items-center flex-wrap lg:flex-nowrap'>
                <RectCard
                    name1="Sunrise" time1={data?.forecast?.forecastday[0]?.astro?.sunrise} icon1={<GiSunrise className='m-2 text-5xl' />}
                    name2="Sunset" time2={data?.forecast?.forecastday[0]?.astro?.sunset} icon2={<GiSunset className='m-2 text-5xl' />}
                />
                <RectCard
                    name1="Moonrise" time1={data?.forecast?.forecastday[0]?.astro?.moonrise} icon1={<WiMoonrise className='m-2 text-5xl' />}
                    name2="Moonset" time2={data?.forecast?.forecastday[0]?.astro?.moonset} icon2={<WiMoonset className='m-2 text-5xl' />}
                />
            </div>
            <div className='w-4/5 h-auto md:h-1/2 flex justify-around items-center lg:flex-nowrap flex-wrap'>
                <Card heading="Wind(km/h)" icon={<TbWind className='text-5xl' />} value={data?.current?.wind_kph} />
                <Card heading="Direction" icon={<GiCompass className='text-5xl' />} value={data?.current?.wind_dir} />
                <Card heading="Visibility(km)" icon={<MdVisibility className='text-5xl' />} value={data?.current?.vis_km} />
                <Card heading="Cloud" icon={<BsCloudsFill className='text-5xl' />} value={data?.current?.cloud} />
            </div>
        </div>
    )
}

export default MoreInfo;