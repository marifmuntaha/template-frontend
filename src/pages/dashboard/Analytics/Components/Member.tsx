import ReactApexChart from "react-apexcharts";
import {irregularTimeSeriesOpts} from "@/pages/dashboard/Analytics/data.ts";

const member = () => {
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
                        <ReactApexChart id="area-timeSeries" className="apex-charts" options={irregularTimeSeriesOpts}
                                        height={380} series={irregularTimeSeriesOpts.series} type="area"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default member;