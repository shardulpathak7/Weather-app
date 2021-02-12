import styled from 'styled-components';
import { Icon } from './Weather';
import sun from '../assets/sun.svg';
import LineChart from './LineChart';

const Container = styled.div`
	margin: 30px auto;
	border-radius: 6px;
	box-shadow: 0px 0px 5px 0px rgba(48, 46, 48, 0.75);
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
const Weather = () => {
	return (
		<Container>
			<Temp>
				<H1>26c&deg;</H1>
				<Icon detail src={sun} />
			</Temp>
			<LineChart />
			<AttrContainer>
				<TextContainer>
					<Text>Pressure</Text>
					<Data>1013 hpa</Data>
				</TextContainer>
				<TextContainer>
					<Text>Humidity</Text>
					<Data>93 %</Data>
				</TextContainer>
			</AttrContainer>
		</Container>
	);
};
export default Weather;
