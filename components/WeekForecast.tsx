import React from 'react'

const WeekForecast = ({data}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-2 w-full mt-10'>
     {data.forecast.forecastday.map((day, index) => 
     (
        <div key={index} className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
            <p>{new Date(day.date).toLocaleString("en-US", {weekday: "short"})}</p>
        </div>
     )
     )}
    </div>
  )
}

export default WeekForecast;
