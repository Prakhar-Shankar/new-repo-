"use client"
import  React, { useState } from "react";
import {KeyboardEvent} from "react";

import Input from "../components/Input"
import Current from "../components/Current";
import WeekForecast from "../components/WeekForecast";
import WeatherDetails from "../components/WeatherDetails";

const Home = () => {

  const [data, setdata] = useState({});
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url = `http://api.weatherapi.com/v1/forecast.json?key=123a07f06f1d4fe8944215302232809&q=${location}&days=1&aqi=yes&alerts=yes`;
 

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response1 = await fetch(url);
  
        if (!response1.ok) {
          throw new Error("City not found");
        }
  
        const data = await response1.json();
        setdata(data);
        setLocation("");
        setError("");

      } catch (error) {
        setError(error.message);
        setdata({});
      }
    }
  };
  
  let content;
  if(Object.keys(data).length === 0 && error === '')
  {
    content = (
      <div className="ml-4">
        <h2>Welcome to Calamity Clerk</h2>
      </div>
    );
  }else if (error !== ""){
    content = (
      <div className="ml-4">
        <p>City Not Found</p>
        <p>Please Enter a Valid City</p>
      </div>
    )
  } else {
    content = (
      <>
      <div>
        <Current data = {data}/>
        <WeekForecast data = {data}/>
      </div>
      <div className="ml-4">
        <WeatherDetails/>
      </div>
      </>
    )
  }
  
  return <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen w-screen -mt-28">
    <div className="bg-white/25 w-full flex flex-col h-full">

    {/* Input and logo */}
    <div className="flex flex-col justify-between items-center p-12 md:flex-row">
      <Input handleSearch = {handleSearch} setLocation = {setLocation}/>
      <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">Calamity Clerk</h1>
    </div>
    {content}
    </div>
  </div>
};

export default Home;

