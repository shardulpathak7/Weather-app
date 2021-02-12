import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
const Container = styled.div`
	height: 20vh;
	width: 400px;
	margin-bottom: 10px;
`;
const Chart = styled(Line)`
	position: absolute;
`;
const Main = styled.div`
	position: relative;
	&::-webkit-scrollbar {
		display: none;
	}
	overflow-x: scroll;
`;
const LineChart = () => {
	const data = {
		labels: [
			['21°', '10am'],
			['21°', '10am'],
			['21°', '10am'],
			['21°', '10am'],
			['21°', '10am'],
			['21°', '10am'],
			['21°', '10am'],
			['21°', '10am'],
		],
		backgroundColor: ['black', 'grey'],
		datasets: [
			{
				data: [21, 0, 3, 3, 3, 3],
				fill: false,
				backgroundColor: 'rgba(0,0,0,0)',
				pointBackgroundColor: 'rgba(250,250,250)',
				pointHoverBackgroundColor: 'rgba(250,250,250)',
				borderColor: 'rgb(6, 154, 212)',
				pointHoverBorderWidth: 1.8,
				borderWidth: 1.8,
				pointHoverRadius: 4,
				pointRadius: 4,
			},
		],
	};
	const options = {
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
						fontColor: 'black',
						fontSize: 15,
						padding: 10,
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
				<Chart data={data} options={options} />
			</Container>
		</Main>
	);
};
export default LineChart;
