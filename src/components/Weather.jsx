import styled, { css } from 'styled-components';
import sun from '../assets/sun.svg';
import cloudy from '../assets/cloudy.svg';
import rain from '../assets/rain.svg';

const Container = styled.div`
	padding: 10px 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	white-space: nowrap;
	margin: 2px;
	${(props) =>
		props.active &&
		css`
			background-color: #fffeef;
			border: 2px solid #48aeed;
		`}
`;
const Day = styled.div`
	font-size: 2rem;
	padding: 2px;
`;
export const Temp = styled.div`
	padding: 2px;
	font-size: 1.5rem;
	color: black;
`;
export const Condition = styled.div`
	font-size: 1.3rem;
	display: flex;
	padding: 2px;
	flex-direction: column;
	align-items: center;
`;
export const Icon = styled.img`
	padding: 2px;
	height: 40px;
	${(props) =>
		props.detail &&
		css`
			height: 80px;
			margin: 20px 0;
		`}
	${(props) =>
		props.header &&
		css`
			padding: 0;
			height: 45px;
			margin-left: 10px;
		`}
`;
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Weather = (props) => {
	const { dt, temp, weather } = props.day;
	const { index, setSelected, active } = props;
	return (
		<Container
			active={active}
			onClick={() => {
				setSelected(index);
			}}>
			<Day>{day[new Date(dt * 1000).getDay()]}</Day>
			<Temp>
				{Math.round(temp.day)}&deg;
				<span style={{ fontWeight: 'lighter', color: '#4F4E4B ' }}>
					{Math.round(temp.night)}&deg;
				</span>
			</Temp>
			<>
				{weather[0].main == 'Clear' ? (
					<Condition>
						<Icon src={sun} />
						Sunny
					</Condition>
				) : weather[0].main == 'Clouds' ? (
					<Condition>
						<Icon src={cloudy} />
						Cloudy
					</Condition>
				) : (
					<Condition>
						<Icon src={rain} />
						Rainy
					</Condition>
				)}
			</>
		</Container>
	);
};
export default Weather;
