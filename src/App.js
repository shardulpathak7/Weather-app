import styled from 'styled-components';
import WeatherApp from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ContentLoader from './components/ContentLoader';
//create content loader for the app ✅
//making label
//daychart
//different view for desktop

const Container = styled.div`
	width: 96vw;
`;
const Error = styled.div`
	color: grey;
	text-align: center;
	font-size: 20px;
`;
export const fetchWeatherData = async (lat, lon) => {
	const result = await axios.get(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=85109aa0ef476baab799fb40d3adfdfd`
	);
	// const risetime = new Date(getSunrise(lat, lon));
	// const settime = new Date(getSunset(lat, lon));
	// console.log(risetime + ' ' + settime);
	const {
		hourly,
		daily,
		current: { humidity, pressure, temp, weather },
	} = result.data;
	const currweather = weather[0].main;
	const labels = hourly.map((hour) => {
		var date = new Date(hour.dt * 1000).getHours();
		var time = date > 11 ? date - 12 + 'pm' : date + 'am';
		var temp = hour.temp + '°';
		return [temp, time];
	});
	const newData = hourly.map((hour) => {
		return hour.temp;
	});

	const collection = {
		newData,
		labels,
		humidity,
		pressure,
		temp,
		currweather,
		daily,
		lat,
		lon,
	};
	return collection;
};
function App() {
	const [collection, setCollection] = useState(null);
	const [error, setError] = useState(null);
	//** fetching the location data from device & using that to display initial weather data
	//** used geolocation api 🚀
	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude: lat, longitude: lon } = position.coords;
					const result = await fetchWeatherData(lat, lon);
					setCollection(result);
				},
				(error) => {
					setError(error);
				}
			);
		} else {
			console.log('Not Available');
		}
	}, []);
	return (
		<Container>
			{collection ? (
				<>
					<WeatherApp collection={collection} />
				</>
			) : error ? (
				<>
					<Error>Allow access to location</Error>
					<Error>To give you location specific weather data</Error>
				</>
			) : (
				<ContentLoader />
			)}
		</Container>
	);
}

export default App;
