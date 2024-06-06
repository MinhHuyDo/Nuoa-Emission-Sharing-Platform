import React from 'react';

function Table() {
    return (
        <div className=' mt-6 mx-4 p-6 bg-white shadow-lg rounded-lg'>
            <div className='text-xl font-bold mb-4'>Processed Requests</div>                
            <table className='w-full text-center border-collapse text-lg'>
                <thead>
                    <tr className='border border-b-black px-4 py-2 '>
                        <th className='p-4'>ID</th>
                        <th className='p-4'>Product ID</th>
                        <th className='p-4'>Product Name</th>
                        <th className='p-4'>Data Owner</th>
                        <th className='p-4'>Version</th>
                        <th className='p-4'>Date Processed</th>
                        <th className='p-4'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border border-b-black px-4 py-2 font-medium'>
                        <td className='p-4'><a className="id-link text-blue-500 underline" href="charts.html">abc1</a></td>
                        <td className='p-4'>Product ID</td>
                        <td className='p-4'>Product Name</td>
                        <td className='p-4'>Data Owner</td>
                        <td className='p-4'>Version</td>
                        <td className='p-4'>Date Processed</td>
                        <td className='p-4'>Status</td>
                    </tr>
                    <tr className='border border-b-black px-4 py-2 font-medium'>
                        <td className='p-4'><a className="id-link text-blue-500 underline" href="charts.html">abc1</a></td>
                        <td className='p-4'>Product ID</td>
                        <td className='p-4'>Product Name</td>
                        <td className='p-4'>Data Owner</td>
                        <td className='p-4'>Version</td>
                        <td className='p-4'>Date Processed</td>
                        <td className='p-4'>Status</td>
                    </tr>
                    <tr className='border border-b-black px-4 py-2 font-medium'>
                        <td className='p-4'><a className="id-link text-blue-500 underline" href="charts.html">abc2</a></td>
                        <td className='p-4'>Product ID</td>
                        <td className='p-4'>Product Name</td>
                        <td className='p-4'>Data Owner</td>
                        <td className='p-4'>Version</td>
                        <td className='p-4'>Date Processed</td>
                        <td className='p-4'>Status</td>
                    </tr>
                    <tr className='border border-b-black px-4 py-2 font-medium'>
                        <td className='p-4'><a className="id-link text-blue-500 underline" href="charts.html">abc3</a></td>
                        <td className='p-4'>Product ID</td>
                        <td className='p-4'>Product Name</td>
                        <td className='p-4'>Data Owner</td>
                        <td className='p-4'>Version</td>
                        <td className='p-4'>Date Processed</td>
                        <td className='p-4'>Status</td>
                    </tr>
                    <tr className='border border-b-black px-4 py-2 font-medium'>
                        <td className='p-4'><a className="id-link text-blue-500 underline" href="charts.html">abc4</a></td>
                        <td className='p-4'>Product ID</td>
                        <td className='p-4'>Product Name</td>
                        <td className='p-4'>Data Owner</td>
                        <td className='p-4'>Version</td>
                        <td className='p-4'>Date Processed</td>
                        <td className='p-4'>Status</td>
                    </tr>
                </tbody>
            </table>

            <div className='text-xl font-bold mt-4'>
                <a className="text-blue-500 underline" href="charts.html">Processed Requests</a>
            </div>
        </div>
    );
}

export default Table;
