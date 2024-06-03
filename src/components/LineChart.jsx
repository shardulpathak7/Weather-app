import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

//** Take a look how you made a chart scrollable in a block

const Container = styled.div`
	height: 22vh;
	width: 2700px;
	margin-bottom: 10px;
`;
const Chart = styled( Line )`
	position: absolute;
`;
const Main = styled.div`
	position: relative;
	&::-webkit-scrollbar {
		display: none;
	}
	overflow-x: scroll;
`;
const LineChart = ( props ) => {
	const data = () => {
		return {
			labels: props.collection.labels,
			datasets: [
				{
					data: props.collection.newData,
					fill: false,
					pointBackgroundColor: 'rgba(250,250,250)',
					pointHoverBackgroundColor: 'rgba(250,250,250)',
					borderColor: '#069ad4',
					pointHoverBorderWidth: 1.8,
					borderWidth: 1.8,
					pointHoverRadius: 4,
					pointRadius: 4,
				},
			],
		};
	};
	const options = {
		responsive: true,
		plugins: [
			{
				afterDraw: ( chart ) => {
					var ctx = chart.chart.ctx;
					console.log( ctx );
				},
			},
		],
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						display: false,
					},
					ticks: {
						display: false,
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						drawBorder: false,
						lineWidth: 1.8,
						zeroLineWidth: 1.8,
						zeroLineColor: 'rgba(0,0,0,.3)',
						color: 'rgba(0,0,0,.3)',
					},
					ticks: {
						// fontColor: 'black',
						// fontSize: 15,
						// padding: 5,
						display: false,
					},
					scaleLabel: {
						fontColor: 'rgb(0,0,0)',
					},
				},
			],
		},
		tooltips: {
			enabled: false,
		},
		layout: {
			padding: {
				top: 10,
				right: 40,
				left: 10,
			},
		},
	};
	return (
		<Main>
			<Container>
				<Chart data={ data } options={ options } />
			</Container>
		</Main>
	);
};
export default LineChart;
