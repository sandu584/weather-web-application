import React from 'react'

const RectCard = ({name1, time1, icon1, name2, time2, icon2}) => {
    return (
        <div className='h-48 lg:w-2/5 w-auto m-6 flex justify-around items-center font-semibold bg-white bg-opacity-40 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-lg border border-white/90 text-3xl'>
            <div className='p-12 flex justify-center items-center flex-col'>
                <h3 className='m-2'>{name1}</h3>
                {icon1}
                <h3 className='m-2'>{time1}</h3>
            </div>
            <div className='p-12 flex justify-center items-center flex-col'>
                <h3 className='m-2'>{name2}</h3>
                {icon2}
                <h3 className='m-2'>{time2}</h3>
            </div>
        </div>
    )
}

export default RectCard
