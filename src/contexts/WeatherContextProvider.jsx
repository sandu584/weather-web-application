import React, { useEffect, useState } from 'react'
import WeatherContext from './weatherContext'

const WeatherContextProvider = ({ children }) => {

	const [city, setCity] = useState("Bangalore");
	const [data, setData] = useState({});
	const [coords, setCorrds] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				// console.log(position.coords);

				const { latitude, longitude } = position.coords;
				setCorrds({ latitude, longitude });
				// console.log("coords : ", coords);
			})
		} else {
			console.log("Error while fetching the co-ordinates");
		}
	}, [])

	useEffect(() => {
		if (coords) {
			// console.log("coords : ", coords);
			fetch(`https://api.opencagedata.com/geocode/v1/json?key=API_KEY&q=${coords?.latitude}%2C+${coords?.longitude}&pretty=1&no_annotations=1`)
				.then((res) => res.json())
				.then((res) => setCity(res.results[0].components.county))
				.catch(err => console.log("Error while converting Coords to Place : ", err))
		} else {
			console.log("Coords are not set");
		}
	}, [coords]);

	useEffect(() => {
		// Fetch data inside this effect
		const fetchData = async () => {
			try {
				const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=API_KEY&q=${city}&days=1&aqi=yes&alerts=yes`);
				const weatherData = await response.json();
				setData(weatherData);
			} catch (err) {
				console.error("Error while fetching the data:", err);
			}
		};

		fetchData();
	}, [city, setData]);

	return (
		<WeatherContext.Provider value={{ city, setCity, data, setData }}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherContextProvider
