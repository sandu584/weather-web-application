import React from 'react'

const Card = ({ heading, icon, value }) => {
    return (
        <div className='sm:h-60 sm:w-64 w-40 h-44 m-1 p-2 flex flex-col justify-around items-center bg-white bg-opacity-40 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-lg border border-white/90 text-black'>
            <div className='flex justify-around w-full items-center'>
                <h2 className='text-xl lg:text-2xl sm:text-3xl font-bold'>{heading}</h2>
                {icon}
            </div>
            <h2 className='text-4xl lg:text-6xl sm:text-7xl font-semibold'>{value}</h2>
        </div>
    )
}

export default Card
