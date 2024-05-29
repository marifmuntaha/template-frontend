// components
import Statistics from './Components/Statistics'
import SessionsByBrowser from './Components/SessionsByBrowser'
import SessionsByOS from './Components/SessionsByOS'
import ViewsPerMinute from './Components/ViewsPerMinute'
import SessionsOverview from './Components/SessionsOverview'
import SessionsByCountry from './Components/SessionsByCountry'
import TableCharts from './Components/TableCharts'
import Device from "@/pages/dashboard/Analytics/Components/Device.tsx";
import Information from "@/pages/dashboard/Analytics/Components/Information.tsx";
import Timestamp from "@/pages/dashboard/Analytics/Components/Timestamp.tsx";
import Member from "@/pages/dashboard/Analytics/Components/Member";
import Log from "@/pages/dashboard/Analytics/Components/Log.tsx";

const Analytics = () => {
    return (
        <>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mb-6">
                <Timestamp/>
                <Information/>
                <Device/>
                {/*<Statistics />*/}
                {/*<SessionsByBrowser />*/}
                {/*<SessionsByOS />*/}
                {/*<ViewsPerMinute />*/}
            </div>

			<div className="grid grid-cols-12 gap-6 mb-6">
				<div className="xl:col-span-8 col-span-12">
					<Member/>
				</div>
				<div className="xl:col-span-4 col-span-12">
					<div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-6 mb-6">
						<Log/>
						<Log/>
					</div>
				</div>
			</div>

			<div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
				<TableCharts/>
			</div>
        </>
    )
}

export default Analytics
