import { Line } from 'react-chartjs-2';

//create chart using sunrise & sunset time
const DayChart = () => {
	const data = (canvas) => {
		var ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(100, 100, 0, 100);
		gradient.addColorStop(0.7, 'rgba(240, 175, 100,.5)');
		gradient.addColorStop(0.6, 'rgba(245, 204, 157, 0.5)');
		gradient.addColorStop(1, 'rgba(248, 246, 245, 0.5)');
		ctx.fillStyle = gradient;
		ctx.fillRect(300, 300, 150, 100);
		return {
			labels: ['1', '2', '3', '4', '5'],
			datasets: [
				{
					label: '# of Votes',
					data: [-10, 1, 4, 1, -10],
					backgroundColor: [gradient, 'black'],
					borderColor: 'rgba(236, 156, 65, 0.5)',
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
						beginAtZero: true,
					},
				},
			],
			xAxes: [
				{
					type: 'time',
					distribution: 'series',
					bounds: 'data',
					time: {
						unit: 'hour',
						// min: moment(1471174953000),
						// max: moment(1473853353000),
					},
				},
			],
		},
	};

	return <Line width={300} data={data} options={options} />;
};

export default DayChart;
