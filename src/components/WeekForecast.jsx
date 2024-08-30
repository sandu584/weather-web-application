import React, { useContext } from 'react'
import TableRow from './TableRow';
import { FaCloudSun } from "react-icons/fa";
import WeatherContext from '../contexts/weatherContext';

const WeekForecast = () => {

    const { data } = useContext(WeatherContext);

    return (
        <div className='md:h-4/5 h-4/5 w-full overflow-y-scroll scrollbar-hide flex flex-col justify-start items-center'>
            <h3 className='text-4xl font-semibold text-white underline'>Seven Days Forecast</h3>
            <table className='text-2xl h-4/5 w-4/5 p-4 text-center mt-8 bg-white bg-opacity-40 shadow-lg shadow-black/10 backdrop-blur-lg border rounded-2xl overflow-hidden font-semibold'>
                <thead>
                    <tr>
                        <th className='border p-4'>Timing</th>
                        <th className='border p-4'>Weather</th>
                        <th className='border p-4'>Degree</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.forecast?.forecastday[0].hour.map((everyHour) => {
                        ///this hour by hour forecast, free trail has been over, so dont have access to future forecast.
                        return (
                            <tr className='border-b' key={everyHour.time_epoch}>
                                <td className='p-4'>{everyHour?.time?.split(' ')[1]}</td>
                                <td className='p-4 flex justify-center items-center h-full'>
                                    <img src={everyHour?.condition?.icon} alt="" />
                                </td>
                                <td className='p-4'>{everyHour?.temp_c}&deg;</td>
                            </tr>
                        )
                    })}

                    {/* below one is the future forecast code */}
                    {/* {data?.forecast?.forecastday[0]?.day.map((everyDay) => {

                        // return (
                        //     <tr className='border-b' key={everyDay?.date_epoch}>
                        //         <td className='p-4'>{everyDay?.date}</td>
                        //         <td className='p-4 flex justify-center items-center h-full'>
                        //             <img src={everyDay?.day?.condition?.icon} alt="" />
                        //         </td>
                        //         <td className='p-4'>{everyDay?.day?.maxtemp_c}&deg;</td>
                        //     </tr>
                        // )

                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default WeekForecast
