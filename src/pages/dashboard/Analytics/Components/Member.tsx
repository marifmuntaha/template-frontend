import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import moment from "moment";

const Member = () => {
    const [chart, setChart] = useState({
        options: {
            chart: {
                id: "area-timeSeries",
                stacked: false,
                height: 380,
                zoom: {
                    enabled: false,
                },
            },
            xaxis: {
                categories: {},
                tickAmount: 8,
            },
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
            title: {
                text: 'Lalu lintas',
                offsetX: 0,
            },
            tooltip: {
                shared: true,
                y: {
                    formatter: function (val: any) {
                        return val + 'mbps'
                    }
                }
            },
            grid: {
                row: {
                    colors: ['transparent', 'transparent'],
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
        },
        series: [
            {
                name: "Upload",
                data: [0]
            },
            {
                name: "Download",
                data: [0]
            }
        ]
    })
    const categories: any[] = []
    const series: any[] = []
    const series1: any[] = []
    const handleData = (date: Date) => {
        if (categories.length === 12){
            categories.shift();
            categories.push(moment(date).format("mm:ss").toString());
        }
        else {
            categories.push(moment(date).format("mm:ss").toString());
        }
        if (series.length === 12 || series1.length === 12) {
            series.shift();
            series1.shift();
            series.push(Math.floor(Math.random() * 100));
            series1.push(Math.floor(Math.random() * 100));
        }
        else {
            series.push(Math.floor(Math.random() * 100));
            series1.push(Math.floor(Math.random() * 100));
        }
        setChart({
            ...chart,
            options: {
                ...chart.options,
                xaxis: {
                    ...chart.options.xaxis,
                    categories: categories
                }
            },
            series: [
                {
                    name: "Upload",
                    data: series
                },
                {
                    name: "Download",
                    data: series1
                }
            ]
        });
    }
    useEffect(() => {
        setInterval(() => {
            handleData(new Date());
            console.log(categories.length)
        }, 5000)
    }, []);
    return <>
        <div className="card">
            <div className="flex card-header justify-between items-center !border-0">
                <h4 className="card-title">Pelanggan</h4>
            </div>
            <div className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700">
                <div className="flex flex-wrap justify-around items-center text-center">
                    <div className="w-1/2 lg:w-1/4">
                        <p className="text-gray-400 mt-6 mb-4">
                            <i className="ri-wifi-line"></i> Aktif
                        </p>
                        <h3 className="text-2xl font-normal mb-6">
                            <span>48 User</span>
                        </h3>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <p className="text-gray-400 mt-6 mb-4">
                            <i className="ri-wifi-off-line"></i> Tidak Aktif
                        </p>
                        <h3 className="text-2xl font-normal mb-6">
                            <span>1 User</span>
                        </h3>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <p className="text-gray-400 mt-6 mb-4">
                            <i className="ri-donut-chart-fill"></i> Suspend
                        </p>
                        <h3 className="text-2xl font-normal mb-6">
                            <span>2 User</span>
                        </h3>
                    </div>
                    <div className="w-1/2 lg:w-1/4">
                        <p className="text-gray-400 mt-6 mb-4">
                            <i className="ri-donut-chart-fill"></i> Total
                        </p>
                        <h3 className="text-2xl font-normal mb-6">
                            <span>51 User</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="p-6">
                    <div dir="ltr">
                        <ReactApexChart id="area-timeSeries" className="apex-charts" options={chart.options}
                                        height={380} series={chart.series} type="area"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Member;