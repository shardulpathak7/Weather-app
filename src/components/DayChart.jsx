import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import sun from '../assets/sun.png';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import { useEffect, useState } from 'react';

//create chart using sunrise & sunset time
const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Legend = styled.div`
	padding: 2px;
	line-height: 1.1;
	font-size: 1.6rem;
	font-weight: 400;
`;
const Time = styled.div`
	font-size: 12px;
	padding: 0 2px 2px 2px;
	line-height: 1.4;
	color: #777;
`;
const TimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 8px 0;
`;
const DayChart = ({ lat, lon }) => {
	// const [mounted, setMounted] = useState(false);

	// if (!mounted) {
	// 	Chart.pluginService.register({
	// 		afterUpdate: function (chart) {
	// 			chart.config.data.datasets[0]._meta[0].data[7]._model.pointStyle = sun;
	// 			// chart.config.data.datasets[1]._meta[0].data[2]._model.pointStyle = cloud;
	// 		},
	// 	});
	// }

	// useEffect(() => {
	// 	setMounted(true);
	// }, []);
	const risetime = new Date(getSunrise(lat, lon));
	const settime = new Date(getSunset(lat, lon));
	const riseH = risetime.getHours();
	const riseM = risetime.getMinutes();
	const setH = settime.getHours();
	const setM = settime.getMinutes();
	const arr = [];
	arr.push(-(riseH * 60 + riseM) + 6 * 60);
	arr.push(-(riseH * 60 + riseM) + 13 * 60);
	arr.push(setH * 60 + setM - 20 * 60);
	const currHour = new Date().getHours();
	const currMin = new Date().getMinutes();
	var val = 0;
	if (currHour < 14) val = currHour * 60 + currMin - (riseH * 60 + riseM);
	else {
		val = setH * 60 + setM - (currHour * 60 + currMin);
	}
	const data = (canvas) => {
		var ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(10, 0, 0, 350);
		gradient.addColorStop(0.4, '#fcd363');
		// gradient.addColorStop(0.5, '#f5e4dc');
		gradient.addColorStop(0.6, '#fdea97');
		gradient.addColorStop(0.8, '#faf6e4');
		gradient.addColorStop(1, '#ffffff');
		ctx.fillStyle = gradient;
		// ctx.fillRect(300, 300, 150, 100);

		return {
			labels: ['6am', '1pm', '8pm'],
			datasets: [
				{
					label: '# of Votes',
					data: arr,
					pointBackgroundColor: 'rgba(250,250,250)',
					pointHoverBackgroundColor: 'rgba(250,250,250)',
					pointHoverRadius: 0,
					pointStyle: ['rect', 'circle', sun],
					backgroundColor: gradient,
					borderColor: 'rgba(247, 189, 123, 0.5)',
				},
			],
		};
	};

	const options = {
		legend: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					ticks: {
						display: false,
						min: -100,
						max: 400,
					},
					gridLines: {
						lineWidth: 0,
						zeroLineWidth: 1,
					},
				},
			],
			xAxes: [
				{
					distribution: 'series',
					bounds: 'ticks',
					gridLines: {
						drawBorder: false,
						lineWidth: 0.85,
					},
					ticks: {
						source: 'data',
						padding: 15,
						fontSize: 12,
					},
				},
			],
		},
		tooltips: {
			enabled: false,
		},
	};
	return (
		<>
			<Container>
				<TimeContainer>
					<Legend>Sunrise</Legend>
					<Time>{`${riseH}:${riseM}am`}</Time>
				</TimeContainer>
				<TimeContainer>
					<Legend>Sunset</Legend>
					<Time>{`${setH}:${setM}pm`}</Time>
				</TimeContainer>
			</Container>
			<Line data={data} options={options} />
		</>
	);
};

export default DayChart;
