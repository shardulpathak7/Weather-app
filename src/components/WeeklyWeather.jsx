import Weather from './Weather';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
	display: flex;
	overflow-x: auto;
	@media screen and (min-width: 656px) {
		justify-content: center;
	}
	::-webkit-scrollbar {
		display: none;
	}
`;
const WeeklyWeather = (props) => {
	const [selected, setSelected] = useState(-1);

	return (
		<Container>
			{props.daily.map((day, index) => (
				<Weather
					setSelected={setSelected}
					active={selected === index}
					index={index}
					key={day.dt}
					day={day}
				/>
			))}
		</Container>
	);
};
export default WeeklyWeather;
