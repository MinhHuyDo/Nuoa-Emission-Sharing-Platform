import React, { useState } from 'react';

function TablePR() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const data = [
        { id: 'abc1', productId: 'Product ID', productName: 'Product Name', dataOwner: 'Data Owner', version: 'Version', dateProcessed: 'Date Processed', status: 'Status' },
        // Add more rows as needed
        { id: 'abc11', productId: 'Product ID', productName: 'Product Name', dataOwner: 'Data Owner', version: 'Version', dateProcessed: 'Date Processed', status: 'Status' },
        { id: 'abc12', productId: 'Product ID', productName: 'Product Name', dataOwner: 'Data Owner', version: 'Version', dateProcessed: 'Date Processed', status: 'Status' },
        // Ensure you have more than 10 rows for pagination to take effect
    ];

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return data.slice(startIndex, endIndex).map((row, index) => (
            <tr key={index} className='border hover:bg-slate-200 border-b-black px-4 py-2 font-medium'>
                <td className='p-3'><a className="id-link text-blue-500 underline" href="charts.html">{row.id}</a></td>
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
            <div className='text-3xl font-semibold mb-4'>Processed Requests</div>                
            <div className='flex-1 overflow-auto'>
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

export default TablePR;
