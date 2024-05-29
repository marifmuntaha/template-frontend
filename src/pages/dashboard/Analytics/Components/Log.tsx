import {records} from "@/pages/ui/tables/data.ts";

const Log = () => {
    return <>
        <div className="card">
            <div className="p-6">
                <h3 className="card-title mb-4">Log Pengguna</h3>
                <div className="overflow-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                <tr>
                                    <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                        Waktu
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                        Pelanggan
                                    </th>
                                    <th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
                                        Pesan
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {(records || []).map((record, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
                                            <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Log