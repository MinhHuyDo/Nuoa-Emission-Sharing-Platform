import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TableMPP() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const data = [
        { id: 'abc5', productId: 'WindShield1', productName: '5', amount:'10', dataOwner: 'Data Owner', version: '1', dateProcessed: 'Date Processed', status: 'Active', additionalInfo: [{ key: 'Color', value: 'Red' }, { key: 'Size', value: 'Medium' }] },
        { id: 'abc11', productId: 'CarWheel2', productName: '11', amount:'10', dataOwner: 'Data Owner', version: '2', dateProcessed: 'Date Processed', status: 'Deprecated', additionalInfo: [{ key: 'Color', value: 'Blue' }, { key: 'Size', value: 'Large' }] },
        { id: 'abc12', productId: 'Horn10', productName: '12', amount:'10', dataOwner: 'Data Owner', version: '3', dateProcessed: 'Date Processed', status: 'Active', additionalInfo: [{ key: 'Color', value: 'Green' }, { key: 'Size', value: 'Small' }, { key: 'Size', value: 'Small' }] },
        // Add more rows as needed
    ];

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return data.slice(startIndex, endIndex).map((row) => (
            <tr key={row.id} className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                <td className='p-3'><Link className="id-link text-blue-500 underline" to={`/my-published-pcfs/pcf-detail/${row.id}`} state={{ pcfDetails: row }}>{row.id}</Link></td>
                <td className='p-3'>{row.productId}</td>
                <td className='p-3'>{row.productName}</td>
                <td className='p-3'>{row.dataOwner}</td>
                <td className='p-3'>{row.version}</td>
                <td className='p-3'>{row.dateProcessed}</td>
                <td className='p-3'>{row.status}</td>
            </tr>
        ));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage, endPage;

        if (currentPage <= 2) {
            startPage = 1;
            endPage = Math.min(3, totalPages);
        } else if (currentPage >= totalPages - 1) {
            startPage = Math.max(totalPages - 2, 1);
            endPage = totalPages;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(number => (
            <button
                key={number}
                className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'hover:bg-slate-200'}`}
                onClick={() => handleClick(number)}
            >
                {number}
            </button>
        ));
    };

    return (
        <div className='mt-6 mx-4 p-6 bg-white shadow-lg rounded-lg flex-1 h-[750px] flex flex-col'>
            <div className='flex justify-between items-center mb-4'>
                <div className='text-3xl font-semibold'>My Published PCFs</div>
                <button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
                    <a href="/my-published-pcfs/new-pcf">New PCF</a>
                </button>
            </div>
            <div className='flex-1 overflow-auto'>
                <table className='w-full text-center border-collapse text-lg'>
                    <thead>
                        <tr className='border bg-slate-400 border-b-black px-4 py-2'>
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
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            <hr className='my-4 border-black' />
            <div className='flex items-center justify-center'>
                <nav className='flex space-x-4'>
                    <button
                        className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300' : 'hover:bg-slate-200'}`}
                        onClick={() => handleClick(1)}
                        disabled={currentPage === 1}
                    >
                        &lt;&lt;
                    </button>
                    {renderPageNumbers()}
                    <button
                        className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-300' : 'hover:bg-slate-200'}`}
                        onClick={() => handleClick(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;&gt;
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default TableMPP;
