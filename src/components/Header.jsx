import styled from 'styled-components';
import location from '../assets/location.svg';
import search from '../assets/search.svg';
import Weather from './Weather';

const Container = styled.div``;
const WeeklyWeather = styled.div`
	display: flex;
	overflow-x: auto;
	@media screen and (min-width: 656px) {
		justify-content: center;
	}
	::-webkit-scrollbar {
		display: none;
	}
`;

const Input = styled.input`
	border: none;
	outline-color: #48aeed;
	outline-width: 2px;
	box-shadow: 0px 0px 5px 0px rgba(48, 46, 48, 0.75);
	background: url(${location}) no-repeat 3px 9px / 30px 30px,
		url(${search}) no-repeat 99% 4.5px / 40px 40px;
	border-radius: 6px;
	padding: 0 33px;
	width: 100%;
	height: 43px;
	margin: 30px auto;
	display: block;
`;
const Header = () => {
	const list = [1, 2, 3, 4, 5, 6, 7];
	return (
		<Container>
			<Input type='text' />
			<WeeklyWeather>
				{list.map((id) => (
					<Weather key={id} />
				))}
			</WeeklyWeather>
		</Container>
	);
};
export default Header;
