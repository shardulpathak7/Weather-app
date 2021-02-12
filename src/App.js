import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import WeatherDetail from './components/WeatherDetail';

const Container = styled.div`
	width: 96vw;
`;
		//** look at this you solved the problem
		//**  think clearly & from the start
function App() {
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=Miraj&appid=85109aa0ef476baab799fb40d3adfdfd`
			);
			const {
				coord: { lon, lat },
			} = response.data;
			console.log(lon);
			const result = await axios.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=85109aa0ef476baab799fb40d3adfdfd` // `https://api.openweathermap.org/data/2.5/onecall?q=Miraj&appid=85109aa0ef476baab799fb40d3adfdfd` // `https://api.openweathermap.org/data/2.5/forecast/daily?q=Miraj&units=metric&appid=85109aa0ef476baab799fb40d3adfdfd`
			);
			console.log(result);
			var date = new Date(result.data.hourly[0].dt * 1000);
			console.log(date);
			console.log(date.getMonth());
		};
		fetchData();
	}, []);
	return (
		<Container>
			<Header />
			<WeatherDetail />
		</Container>
	);
}

export default App;
