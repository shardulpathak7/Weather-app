import axios from 'axios';
import { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import location from '../assets/location.svg';
import search from '../assets/search.svg';
import debounce from 'lodash/debounce';
import { Condition, Icon, Temp } from './Weather';
import { fetchWeatherData } from '../App';
import sun from '../assets/sun.svg';
import cloudy from '../assets/cloudy.svg';
import DayChart from './DayChart';
import WeatherDetail from './WeatherDetail';
import WeeklyWeather from './WeeklyWeather';
import rain from '../assets/rain.svg';
const Container = styled.div`
	position: relative;
`;
const Input = styled.input`
	border: none;
	outline-color: #48aeed;
	outline-width: 0.01px;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.27);
	background: url(${ location }) no-repeat 3px 9px / 30px 30px,
		url(${ search }) no-repeat 99% 4.5px / 40px 40px;
	border-radius: 6px;
	padding: 0 33px;
	width: 90vw;
	height: 43px;
	margin: 30px auto;
	display: block;
`;
const Ul = styled.ul`
	width: 90vw;
	list-style-type: none;
	box-shadow: 0 1px 5px rgb(0 0 0 / 65%);
	border-radius: 8px;
	padding: 0;
	z-index: 1;
	position: absolute;
	left: 3%;
	top: 35px;

	background-color: white;
`;
const Text = styled.div`
	color: #272525;
	margin: 0 20px;
`;
const Li = styled.li`
	height: 50px;
	font-size: 1.5rem;
	color: #71848a;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 12px 10px 12px 0;
	border-bottom: 1px solid #dadada;
	&:hover {
		background-color: rgb(217, 244, 247);
		cursor: pointer;
	}
`;
const NewContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
const Header = ( props ) => {
	const [ location, setLocation ] = useState( '' );
	const [ places, setPlaces ] = useState( [] );
	const [ focused, setFocused ] = useState( false );
	const [ collection, setCollection ] = useState( props.collection );
	const fetchLocationWiseData = async ( str ) => {
		const response = await axios.get(
			`https://api.locationiq.com/v1/autocomplete.php?key=pk.64b469c52b2232a772736db94445d2f3&q=${ str }&limit=5`
		);
		const { data } = response;
		//** 🚀 🚀 🚀 learnt & implemented promise.all
		const arr = await Promise.all(
			data.map( async ( { lon, lat } ) => {
				const { temp, currweather } = await fetchWeatherData( lat, lon );
				return { temp, currweather };
			} )
		);
		const placeData = data.map( ( place, index ) => {
			return { ...place, ...arr[ index ] };
		} );
		setFocused( true );
		setPlaces( placeData );
	}

	const fetchData = useMemo( () => debounce(
		fetchLocationWiseData,
		600,
	), [] )
	const handleChange = async ( e ) => {
		const str = e.target.value;
		if ( str.length > 2 ) {
			fetchData( str );
		}
		setLocation( str );
	};
	const handleFocus = () => {
		if ( location.length > 2 ) setFocused( true );
	};
	const handleMouseOut = ( e ) => {
		setFocused( false );
	};
	const handleClick = async ( lat, lon ) => {
		setLocation( '' );
		const response = await fetchWeatherData( lat, lon );
		setCollection( response );
	};
	const newRef = useRef( null );
	//** used 🕛 settimeout 👇 so that onMouseOut event wiil fire after click event on li  */
	return (
		<>
			<Container ref={ newRef }>
				<Input
					onBlur={ () => {
						setTimeout( handleMouseOut, 300 );
					} }
					onFocus={ handleFocus }
					type='text'
					value={ location }
					onChange={ handleChange }
				/>
				{ location.length > 2 &&
					places &&
					places.length > 0 &&
					( focused ? (
						<Ul>
							{ places.map( ( place, index ) => (
								<Li key={ index } onClick={ () => handleClick( place.lat, place.lon ) }>
									<Text>
										{ `${ place.address.name }` }
										{ place.address.state && `, ${ place.address.state }  ` }
									</Text>
									<NewContainer>
										<Temp>{ Math.round( place.temp ) }&deg;C </Temp>
										{ place.currweather === 'Clear' ? (
											<Condition>
												<Icon header src={ sun } />
											</Condition>
										) : place.currweather === 'Clouds' ? (
											<Condition>
												<Icon style={ { paddingBottom: 4 } } header src={ cloudy } />
											</Condition>
										) : (
											<Condition>
												<Icon header src={ rain } />
											</Condition>
										) }
									</NewContainer>
								</Li>
							) ) }
						</Ul>
					) : null ) }
			</Container>
			<WeeklyWeather daily={ collection.daily } />
			<WeatherDetail collection={ collection } />
			<DayChart lat={ collection.lat } lon={ collection.lon } />
		</>
	);
};
export default Header;
