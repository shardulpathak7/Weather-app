import styled, { css } from 'styled-components';
import sun from '../assets/sun.svg';

const Container = styled.div`
	padding: 10px 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	white-space: nowrap;
	margin: 2px;
	background-color: #fffeef;
	border: 2px solid #48aeed;
`;
const Day = styled.div`
	font-size: 2rem;
	padding: 2px;
`;
const Temp = styled.div`
	padding: 2px;
	font-size: 1.5rem;
`;
const Condition = styled.div`
	font-size: 1.3rem;
	display: flex;
	padding: 2px;
	flex-direction: column;
`;
export const Icon = styled.img`
	padding: 2px;
	height: 30px;
	${(props) =>
		props.detail &&
		css`
			height: 80px;
			margin: 20px 0;
		`}
`;
const Weather = (props) => {
	return (
		<Container>
			<Day>Mon</Day>
			<Temp>
				28&deg;<span style={{ fontWeight: 'lighter', color: '#4F4E4B ' }}>19&deg;</span>
			</Temp>
			<Condition>
				<Icon src={sun} />
				Sunny
			</Condition>
		</Container>
	);
};
export default Weather;
