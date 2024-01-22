import { useState } from "react"
import axios from "axios"

function Weather()
{
const[city,setCity]=useState("")
const[weather,setWeather]=useState("")
const[desc,setDesc]=useState("")
const[temp,setTemp]=useState("")


function handleCity(evt)
{
    setCity(evt.target.value)
}

function getWeather()
{
    var weatherData = axios (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=206922d4762b6c40827b140b7adb6a86`);

    weatherData.then(function(success)
    {
        console.log(success.data)
        setWeather(success.data.weather[0].main)
        setDesc(success.data.weather[0].description)
        setTemp(success.data.main.temp)
    }
    ).catch(function()
    {
        alert("Wrong input")
    })
}


return(<div className="bg-black p-20">
    <div className="bg-green-400 p-10 rounded-md">
        <h1 className="text-2xl font-md">Weather Report</h1>
        <p>I can give you a weather report about your city !</p>
        <input type="text" className="mt-2 border border-black rounded-md p-1" onChange={handleCity}></input><br></br>
        <button className="bg-black text-white p-2 rounded-md mt-2" onClick={getWeather}>Get Report</button>


        <div className="mt-2">
            <p><b>Weather : </b>{weather}</p>
            <p><b>Temperature :</b>{temp}</p>
            <p><b>Description :</b>{desc}</p>
        </div>
    </div>
</div>)
}
export default Weather