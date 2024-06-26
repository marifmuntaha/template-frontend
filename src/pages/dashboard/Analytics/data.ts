import {ApexOptions} from "apexcharts";
import moment from "moment";

export interface TableRecord {
	id: number
	channel: string
	visits: string
	color: string
	now: number
	network: string
	duration: string
	session: string
	views: string
}

// dummy record
export const records: TableRecord[] = [
	{
		id: 1,
		channel: 'Direct',
		visits: '2,050',
		color: 'primary',
		now: 65,
		network: 'Facebook',
		duration: '0-30',
		session: '2,250',
		views: '4,250',
	},
	{
		id: 2,
		channel: 'Organic Search',
		visits: '1,405',
		color: 'info',
		now: 45,
		network: 'Instagram',
		duration: '31-60',
		session: '1,501',
		views: '2,050',
	},
	{
		id: 3,
		channel: 'Refferal',
		visits: '750',
		color: 'warning',
		now: 30,
		network: 'Twitter',
		duration: '61-120',
		session: '750',
		views: '1,600',
	},
	{
		id: 4,
		channel: 'Social',
		visits: '540',
		color: 'danger',
		now: 25,
		network: 'LinkedIn',
		duration: '121-240',
		session: '540',
		views: '1,040',
	},
	{
		id: 5,
		channel: 'Other',
		visits: '8,965',
		color: 'success',
		now: 30,
		network: 'Other',
		duration: '141-420',
		session: '56',
		views: '886',
	},
]

const dataSeries = [
	[
		{
			date: '15:00',
			value: 20000000,
		},
		{
			date: '15:01',
			value: 10379978,
		},
		{
			date: '2014-01-03',
			value: 30493749,
		},
		{
			date: '2014-01-04',
			value: 10785250,
		},
		{
			date: '2014-01-05',
			value: 33901904,
		},
		{
			date: '2014-01-06',
			value: 11576838,
		},
		{
			date: '2014-01-07',
			value: 14413854,
		},
		{
			date: '2014-01-08',
			value: 15177211,
		},
		{
			date: '2014-01-09',
			value: 16622100,
		},
		{
			date: '2014-01-10',
			value: 17381072,
		},
		{
			date: '2014-01-11',
			value: 18802310,
		},
		{
			date: '2014-01-12',
			value: 15531790,
		},
		{
			date: '2014-01-13',
			value: 15748881,
		},
		{
			date: '2014-01-14',
			value: 18706437,
		},
		{
			date: '2014-01-15',
			value: 19752685,
		},
		{
			date: '2014-01-16',
			value: 21016418,
		},
		{
			date: '2014-01-17',
			value: 25622924,
		},
		{
			date: '2014-01-18',
			value: 25337480,
		},
		{
			date: '2014-01-19',
			value: 22258882,
		},
		{
			date: '2014-01-20',
			value: 23829538,
		},
		{
			date: '2014-01-21',
			value: 24245689,
		},
		{
			date: '2014-01-22',
			value: 26429711,
		},
		{
			date: '2014-01-23',
			value: 26259017,
		},
		{
			date: '2014-01-24',
			value: 25396183,
		},
		{
			date: '2014-01-25',
			value: 23107346,
		},
		{
			date: '2014-01-26',
			value: 28659852,
		},
		{
			date: '2014-01-27',
			value: 25270783,
		},
		{
			date: '2014-01-28',
			value: 26270783,
		},
		{
			date: '2014-01-29',
			value: 27270783,
		},
		{
			date: '2014-01-30',
			value: 28270783,
		},
		{
			date: '2014-01-31',
			value: 29270783,
		},
		{
			date: '2014-02-01',
			value: 30270783,
		},
		{
			date: '2014-02-02',
			value: 31270783,
		},
		{
			date: '2014-02-03',
			value: 32270783,
		},
		{
			date: '2014-02-04',
			value: 33270783,
		},
		{
			date: '2014-02-05',
			value: 28270783,
		},
		{
			date: '2014-02-06',
			value: 27270783,
		},
		{
			date: '2014-02-07',
			value: 35270783,
		},
		{
			date: '2014-02-08',
			value: 34270783,
		},
		{
			date: '2014-02-09',
			value: 28270783,
		},
		{
			date: '2014-02-10',
			value: 35270783,
		},
		{
			date: '2014-02-11',
			value: 36270783,
		},
		{
			date: '2014-02-12',
			value: 34127078,
		},
		{
			date: '2014-02-13',
			value: 33124078,
		},
		{
			date: '2014-02-14',
			value: 36227078,
		},
		{
			date: '2014-02-15',
			value: 37827078,
		},
		{
			date: '2014-02-16',
			value: 36427073,
		},
		{
			date: '2014-02-17',
			value: 37570783,
		},
		{
			date: '2014-02-18',
			value: 38627073,
		},
		{
			date: '2014-02-19',
			value: 37727078,
		},
		{
			date: '2014-02-20',
			value: 38827073,
		},
		{
			date: '2014-02-21',
			value: 40927078,
		},
		{
			date: '2014-02-22',
			value: 41027078,
		},
		{
			date: '2014-02-23',
			value: 42127073,
		},
		{
			date: '2014-02-24',
			value: 43220783,
		},
		{
			date: '2014-02-25',
			value: 44327078,
		},
		{
			date: '2014-02-26',
			value: 40427078,
		},
		{
			date: '2014-02-27',
			value: 41027078,
		},
		{
			date: '2014-02-28',
			value: 45627078,
		},
		{
			date: '2014-03-01',
			value: 44727078,
		},
		{
			date: '2014-03-02',
			value: 44227078,
		},
		{
			date: '2014-03-03',
			value: 45227078,
		},
		{
			date: '2014-03-04',
			value: 46027078,
		},
		{
			date: '2014-03-05',
			value: 46927078,
		},
		{
			date: '2014-03-06',
			value: 47027078,
		},
		{
			date: '2014-03-07',
			value: 46227078,
		},
		{
			date: '2014-03-08',
			value: 47027078,
		},
		{
			date: '2014-03-09',
			value: 48027078,
		},
		{
			date: '2014-03-10',
			value: 47027078,
		},
		{
			date: '2014-03-11',
			value: 47027078,
		},
		{
			date: '2014-03-12',
			value: 48017078,
		},
		{
			date: '2014-03-13',
			value: 48077078,
		},
		{
			date: '2014-03-14',
			value: 48087078,
		},
		{
			date: '2014-03-15',
			value: 48017078,
		},
		{
			date: '2014-03-16',
			value: 48047078,
		},
		{
			date: '2014-03-17',
			value: 48067078,
		},
		{
			date: '2014-03-18',
			value: 48077078,
		},
		{
			date: '2014-03-19',
			value: 48027074,
		},
		{
			date: '2014-03-20',
			value: 48927079,
		},
		{
			date: '2014-03-21',
			value: 48727071,
		},
		{
			date: '2014-03-22',
			value: 48127072,
		},
		{
			date: '2014-03-23',
			value: 48527072,
		},
		{
			date: '2014-03-24',
			value: 48627027,
		},
		{
			date: '2014-03-25',
			value: 48027040,
		},
		{
			date: '2014-03-26',
			value: 48027043,
		},
		{
			date: '2014-03-27',
			value: 48057022,
		},
		{
			date: '2014-03-28',
			value: 49057022,
		},
		{
			date: '2014-03-29',
			value: 50057022,
		},
		{
			date: '2014-03-30',
			value: 51057022,
		},
		{
			date: '2014-03-31',
			value: 52057022,
		},
		{
			date: '2014-04-01',
			value: 53057022,
		},
		{
			date: '2014-04-02',
			value: 54057022,
		},
		{
			date: '2014-04-03',
			value: 52057022,
		},
		{
			date: '2014-04-04',
			value: 55057022,
		},
		{
			date: '2014-04-05',
			value: 58270783,
		},
		{
			date: '2014-04-06',
			value: 56270783,
		},
		{
			date: '2014-04-07',
			value: 55270783,
		},
		{
			date: '2014-04-08',
			value: 58270783,
		},
		{
			date: '2014-04-09',
			value: 59270783,
		},
		{
			date: '2014-04-10',
			value: 60270783,
		},
		{
			date: '2014-04-11',
			value: 61270783,
		},
		{
			date: '2014-04-12',
			value: 62270783,
		},
		{
			date: '2014-04-13',
			value: 63270783,
		},
		{
			date: '2014-04-14',
			value: 64270783,
		},
		{
			date: '2014-04-15',
			value: 65270783,
		},
		{
			date: '2014-04-16',
			value: 66270783,
		},
		{
			date: '2014-04-17',
			value: 67270783,
		},
		{
			date: '2014-04-18',
			value: 68270783,
		},
		{
			date: '2014-04-19',
			value: 69270783,
		},
		{
			date: '2014-04-20',
			value: 70270783,
		},
		{
			date: '2014-04-21',
			value: 71270783,
		},
		{
			date: '2014-04-22',
			value: 72270783,
		},
		{
			date: '2014-04-23',
			value: 73270783,
		},
		{
			date: '2014-04-24',
			value: 74270783,
		},
		{
			date: '2014-04-25',
			value: 75270783,
		},
		{
			date: '2014-04-26',
			value: 76660783,
		},
		{
			date: '2014-04-27',
			value: 77270783,
		},
		{
			date: '2014-04-28',
			value: 78370783,
		},
		{
			date: '2014-04-29',
			value: 79470783,
		},
		{
			date: '2014-04-30',
			value: 80170783,
		},
	],
	[
		{
			date: '2014-01-01',
			value: 150000000,
		},
		{
			date: '2014-01-02',
			value: 160379978,
		},
		{
			date: '2014-01-03',
			value: 170493749,
		},
		{
			date: '2014-01-04',
			value: 160785250,
		},
		{
			date: '2014-01-05',
			value: 167391904,
		},
		{
			date: '2014-01-06',
			value: 161576838,
		},
		{
			date: '2014-01-07',
			value: 161413854,
		},
		{
			date: '2014-01-08',
			value: 152177211,
		},
		{
			date: '2014-01-09',
			value: 140762210,
		},
		{
			date: '2014-01-10',
			value: 144381072,
		},
		{
			date: '2014-01-11',
			value: 154352310,
		},
		{
			date: '2014-01-12',
			value: 165531790,
		},
		{
			date: '2014-01-13',
			value: 175748881,
		},
		{
			date: '2014-01-14',
			value: 187064037,
		},
		{
			date: '2014-01-15',
			value: 197520685,
		},
		{
			date: '2014-01-16',
			value: 210176418,
		},
		{
			date: '2014-01-17',
			value: 196122924,
		},
		{
			date: '2014-01-18',
			value: 207337480,
		},
		{
			date: '2014-01-19',
			value: 200258882,
		},
		{
			date: '2014-01-20',
			value: 186829538,
		},
		{
			date: '2014-01-21',
			value: 192456897,
		},
		{
			date: '2014-01-22',
			value: 204299711,
		},
		{
			date: '2014-01-23',
			value: 192759017,
		},
		{
			date: '2014-01-24',
			value: 203596183,
		},
		{
			date: '2014-01-25',
			value: 208107346,
		},
		{
			date: '2014-01-26',
			value: 196359852,
		},
		{
			date: '2014-01-27',
			value: 192570783,
		},
		{
			date: '2014-01-28',
			value: 177967768,
		},
		{
			date: '2014-01-29',
			value: 190632803,
		},
		{
			date: '2014-01-30',
			value: 203725316,
		},
		{
			date: '2014-01-31',
			value: 218226177,
		},
		{
			date: '2014-02-01',
			value: 210698669,
		},
		{
			date: '2014-02-02',
			value: 217640656,
		},
		{
			date: '2014-02-03',
			value: 216142362,
		},
		{
			date: '2014-02-04',
			value: 201410971,
		},
		{
			date: '2014-02-05',
			value: 196704289,
		},
		{
			date: '2014-02-06',
			value: 190436945,
		},
		{
			date: '2014-02-07',
			value: 178891686,
		},
		{
			date: '2014-02-08',
			value: 171613962,
		},
		{
			date: '2014-02-09',
			value: 157579773,
		},
		{
			date: '2014-02-10',
			value: 158677098,
		},
		{
			date: '2014-02-11',
			value: 147129977,
		},
		{
			date: '2014-02-12',
			value: 151561876,
		},
		{
			date: '2014-02-13',
			value: 151627421,
		},
		{
			date: '2014-02-14',
			value: 143543872,
		},
		{
			date: '2014-02-15',
			value: 136581057,
		},
		{
			date: '2014-02-16',
			value: 135560715,
		},
		{
			date: '2014-02-17',
			value: 122625263,
		},
		{
			date: '2014-02-18',
			value: 112091484,
		},
		{
			date: '2014-02-19',
			value: 98810329,
		},
		{
			date: '2014-02-20',
			value: 99882912,
		},
		{
			date: '2014-02-21',
			value: 94943095,
		},
		{
			date: '2014-02-22',
			value: 104875743,
		},
		{
			date: '2014-02-23',
			value: 116383678,
		},
		{
			date: '2014-02-24',
			value: 125028841,
		},
		{
			date: '2014-02-25',
			value: 123967310,
		},
		{
			date: '2014-02-26',
			value: 133167029,
		},
		{
			date: '2014-02-27',
			value: 128577263,
		},
		{
			date: '2014-02-28',
			value: 115836969,
		},
		{
			date: '2014-03-01',
			value: 119264529,
		},
		{
			date: '2014-03-02',
			value: 109363374,
		},
		{
			date: '2014-03-03',
			value: 113985628,
		},
		{
			date: '2014-03-04',
			value: 114650999,
		},
		{
			date: '2014-03-05',
			value: 110866108,
		},
		{
			date: '2014-03-06',
			value: 96473454,
		},
		{
			date: '2014-03-07',
			value: 104075886,
		},
		{
			date: '2014-03-08',
			value: 103568384,
		},
		{
			date: '2014-03-09',
			value: 101534883,
		},
		{
			date: '2014-03-10',
			value: 115825447,
		},
		{
			date: '2014-03-11',
			value: 126133916,
		},
		{
			date: '2014-03-12',
			value: 116502109,
		},
		{
			date: '2014-03-13',
			value: 130169411,
		},
		{
			date: '2014-03-14',
			value: 124296886,
		},
		{
			date: '2014-03-15',
			value: 126347399,
		},
		{
			date: '2014-03-16',
			value: 131483669,
		},
		{
			date: '2014-03-17',
			value: 142811333,
		},
		{
			date: '2014-03-18',
			value: 129675396,
		},
		{
			date: '2014-03-19',
			value: 115514483,
		},
		{
			date: '2014-03-20',
			value: 117630630,
		},
		{
			date: '2014-03-21',
			value: 122340239,
		},
		{
			date: '2014-03-22',
			value: 132349091,
		},
		{
			date: '2014-03-23',
			value: 125613305,
		},
		{
			date: '2014-03-24',
			value: 135592466,
		},
		{
			date: '2014-03-25',
			value: 123408762,
		},
		{
			date: '2014-03-26',
			value: 111991454,
		},
		{
			date: '2014-03-27',
			value: 116123955,
		},
		{
			date: '2014-03-28',
			value: 112817214,
		},
		{
			date: '2014-03-29',
			value: 113029590,
		},
		{
			date: '2014-03-30',
			value: 108753398,
		},
		{
			date: '2014-03-31',
			value: 99383763,
		},
		{
			date: '2014-04-01',
			value: 100151737,
		},
		{
			date: '2014-04-02',
			value: 94985209,
		},
		{
			date: '2014-04-03',
			value: 82913669,
		},
		{
			date: '2014-04-04',
			value: 78748268,
		},
		{
			date: '2014-04-05',
			value: 63829135,
		},
		{
			date: '2014-04-06',
			value: 78694727,
		},
		{
			date: '2014-04-07',
			value: 80868994,
		},
		{
			date: '2014-04-08',
			value: 93799013,
		},
		{
			date: '2014-04-09',
			value: 99042416,
		},
		{
			date: '2014-04-10',
			value: 97298692,
		},
		{
			date: '2014-04-11',
			value: 83353499,
		},
		{
			date: '2014-04-12',
			value: 71248129,
		},
		{
			date: '2014-04-13',
			value: 75253744,
		},
		{
			date: '2014-04-14',
			value: 68976648,
		},
		{
			date: '2014-04-15',
			value: 71002284,
		},
		{
			date: '2014-04-16',
			value: 75052401,
		},
		{
			date: '2014-04-17',
			value: 83894030,
		},
		{
			date: '2014-04-18',
			value: 90236528,
		},
		{
			date: '2014-04-19',
			value: 99739114,
		},
		{
			date: '2014-04-20',
			value: 96407136,
		},
		{
			date: '2014-04-21',
			value: 108323177,
		},
		{
			date: '2014-04-22',
			value: 101578914,
		},
		{
			date: '2014-04-23',
			value: 115877608,
		},
		{
			date: '2014-04-24',
			value: 112088857,
		},
		{
			date: '2014-04-25',
			value: 112071353,
		},
		{
			date: '2014-04-26',
			value: 101790062,
		},
		{
			date: '2014-04-27',
			value: 115003761,
		},
		{
			date: '2014-04-28',
			value: 120457727,
		},
		{
			date: '2014-04-29',
			value: 118253926,
		},
		{
			date: '2014-04-30',
			value: 117956992,
		},
	]
]
let ts1 = 1388534400000
let ts2 = 1388620800000

const dataSet: any = [[], []]

for (let i = 0; i < 12; i++) {
	ts1 = ts1 + 86400000
	const innerArr = [ts1, dataSeries[0][i].value]
	dataSet[0].push(innerArr)
}
for (let i = 0; i < 12; i++) {
	ts2 = ts2 + 86400000
	const innerArr = [ts2, dataSeries[1][i].value]
	dataSet[1].push(innerArr)
}
const categories: string[] = [];
const updateCategory = (date: any) => {
	const category = moment(date).format("HH:mm:ss").toString()
	categories.push(category);
}
export const irregularTimeSeriesOpts: ApexOptions = {
	chart: {
		type: 'area',
		stacked: false,
		height: 380,
		zoom: {
			enabled: false,
		},
	},
	plotOptions: {
		// line: {
		//     curve: 'smooth',
		// }
	},
	dataLabels: {
		enabled: false,
	},
	series: [
		{
			name: 'Upload',
			data: dataSet[0],
		},
		{
			name: 'Download',
			data: dataSet[1],
		},
	],
	colors: ['#39afd1', '#fa5c7c'],
	markers: {
		size: 0,
		// style: 'full',
	},
	stroke: {
		width: 3,
	},
	fill: {
		gradient: {
			// enabled: true,
			shadeIntensity: 1,
			inverseColors: false,
			opacityFrom: 0.45,
			opacityTo: 0.05,
			stops: [20, 100, 100, 100],
		},
	},
	yaxis: {
		//floating: true,
		labels: {
			// style: {
			//     color: '#8e8da4',
			// },
			offsetX: 0,
			formatter: function (val: any) {
				return (val).toFixed(0)
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	xaxis: {
		type: 'category',
		tickAmount: 8,
		labels: {
			// formatter: function ( val:string)  {
			//     return (val, {
			//       day: 'numeric', month: 'short', year: 'numeric'
			//     }.replace(/ /g, '-'))
			// }
		},
		categories: categories
	},
	title: {
		text: 'Lalu lintas',
		align: 'left',
		offsetX: 0,
	},
	tooltip: {
		shared: true,
		// y: {
		// 	formatter: function (val: any) {
		// 		return (val / 1000000).toFixed(0) + ' points'
		// 	},
		// },
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetX: -10,
	},
	grid: {
		row: {
			colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.2,
		},
		borderColor: '#f1f3fa',
	},
	responsive: [
		{
			breakpoint: 600,
			options: {
				chart: {
					toolbar: {
						show: false,
					},
				},
			},
		},
	],
}