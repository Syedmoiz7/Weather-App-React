import './index.css';
import { useState, useEffect } from 'react';
import axios from "axios" 

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
    }




    return (
        <div className=''>  
            <form onSubmit={submitHandler}>
                <input type="text" className='userInput' required placeholder='Enter Your City Name' onChange={(e => (setCityName(e.target.value)))}
                 />
            </form>
            {(weatherData === null) ? null : 
            <div className="mainContainer">
                <div className="renderWeather">
                    div
                </div>
            </div>

            }


        </div>
    )
}

export default Weather;


