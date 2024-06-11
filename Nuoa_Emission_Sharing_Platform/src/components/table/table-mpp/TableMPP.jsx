import React from 'react';

function TableMPP() {
    return (
        <div className='mt-6 mx-4 p-6 bg-white shadow-lg rounded-lg flex-1'>
            <div className='flex justify-between items-center mb-4'>
                <div className='text-3xl font-semibold'>My Published PCFs</div>
                <button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600' >
                    <a href="/my-published-pcfs/new-pcf">New PCF</a>
                </button>
            </div>
            <table className='w-full text-center border-collapse text-lg'>
                <thead>
                    <tr className='border bg-slate-400 border-b-black px-4 py-2 '>
                        <th className='p-3'>ID</th>
                        <th className='p-3'>Product ID</th>
                        <th className='p-3'>Product Name</th>
                        <th className='p-3'>Data Owner</th>
                        <th className='p-3'>Version</th>
                        <th className='p-3'>Date Processed</th>
                        <th className='p-3'>Status</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc1</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc1</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc2</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc3</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc4</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc4</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc4</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc4</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc4</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                    <tr className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                        <td className='p-3'><a className="id-link text-blue-500 underline" href="/my-published-pcfs/pcf-detail">abc4</a></td>
                        <td className='p-3'>Product ID</td>
                        <td className='p-3'>Product Name</td>
                        <td className='p-3'>Data Owner</td>
                        <td className='p-3'>Version</td>
                        <td className='p-3'>Date Processed</td>
                        <td className='p-3'>Status</td>
                    </tr>
                </tbody>
            </table>
            <hr className='my-4 border-black' />
            <div className='flex items-center'>
                <nav className='flex space-x-4'>
                    <button className='px-3 py-1 hover:bg-slate-200 border rounded'>1</button>
                    <button className='px-3 py-1 hover:bg-slate-200 border rounded'>2</button>
                    <button className='px-3 py-1 hover:bg-slate-200 border rounded'>3</button>
                    <button className='px-3 py-1 hover:bg-slate-200 border rounded'>4</button>
                    <button className='px-3 py-1 hover:bg-slate-200 border rounded'>Next</button>
                </nav>
            </div>
        </div>
    );
}

export default TableMPP;
