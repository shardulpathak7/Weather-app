import styled from 'styled-components';
import { Icon } from './Weather';
import sun from '../assets/sun.svg';
import rain from '../assets/rain.svg';
import cloudy from '../assets/cloudy.svg';
import LineChart from './LineChart';

const Container = styled.div`
	margin: 30px auto;
	border-radius: 6px;
	margin-bottom: 100px;
	box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.3);
`;
const Temp = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
const H1 = styled.span`
	font-size: 6rem;
	font-weight: bolder;
	padding: 20px 0;
`;
const Text = styled.div`
	font-size: clamp(1.7rem, 2vw, 2.2rem);
	line-height: 1.3;
	font-weight: 800;
`;
const Data = styled.div`
	font-size: clamp(1.6rem, 2vw, 2rem);
	line-height: 1.5;
`;
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 40px 10px 20px;
	margin: 10px;
	background-color: #e7f4f7;
`;
const AttrContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const WeatherDetail = (props) => {
	const { collection } = props;
	return (
		<Container>
			<Temp>
				<H1>{`${Math.round(collection.temp)}`}&deg;C</H1>
				{collection.currweather == 'Clear' ? (
					<Icon detail src={sun} />
				) : collection.currweather == 'Clouds' ? (
					<Icon detail src={cloudy} />
				) : (
					<Icon detail src={rain} />
				)}
			</Temp>
			<LineChart collection={collection} />
			<AttrContainer>
				<TextContainer>
					<Text>Pressure</Text>
					<Data>{`${collection.pressure} hpa`}</Data>
				</TextContainer>
				<TextContainer>
					<Text>Humidity</Text>
					<Data>{`${collection.humidity} %`}</Data>
				</TextContainer>
			</AttrContainer>
		</Container>
	);
};
export default WeatherDetail;
