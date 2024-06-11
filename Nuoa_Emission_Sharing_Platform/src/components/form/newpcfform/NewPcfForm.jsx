import React, { useState } from 'react';

function NewPcfForm() {
    const [additionalInfo, setAdditionalInfo] = useState([]);

    const handleAddInfo = () => {
        if (additionalInfo.length < 3) {
            setAdditionalInfo([...additionalInfo, { key: '', value: '' }]);
        }
    };

    const handleRemoveInfo = (index) => {
        const newInfo = additionalInfo.filter((_, i) => i !== index);
        setAdditionalInfo(newInfo);
    };

    const handleChange = (index, event) => {
        const newInfo = additionalInfo.map((info, i) => {
            if (i === index) {
                return { ...info, [event.target.name]: event.target.value };
            }
            return info;
        });
        setAdditionalInfo(newInfo);
    };

    return (
        <div className='mt-6 mx-4 p-6 bg-white shadow-lg rounded-lg flex-1'>
            <div className='flex justify-between items-center mb-4'>
                <div className='text-3xl font-semibold'>New PCF Form</div>
            </div>
            <form className='space-y-4'>
                <div className='flex flex-col'>
                    <label className='mb-2 text-lg font-medium'>Product ID</label>
                    <input
                        type='text'
                        className='p-3 border border-gray-300 rounded bg-gray-100 cursor-not-allowed'
                        value='product4'
                        readOnly
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2 text-lg font-medium'>Product Name</label>
                    <input
                        type='text'
                        className='p-3 border border-gray-300 rounded bg-gray-100 cursor-not-allowed'
                        value='Car Seat'
                        readOnly
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2 text-lg font-medium'>Amount</label>
                    <input type='text' className='p-3 border border-gray-300 rounded' placeholder='Enter Amount' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2 text-lg font-medium'>Emission per Unit</label>
                    <input type='text' className='p-3 border border-gray-300 rounded' placeholder='Enter Emission per Unit' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2 text-lg font-medium'>Additional Information</label>
                    {additionalInfo.map((info, index) => (
                        <div key={index} className='flex items-center space-x-4 mb-2'>
                            <input
                                type='text'
                                name='key'
                                className='p-3 border border-gray-300 rounded flex-1'
                                placeholder={`Key ${index + 1}`}
                                value={info.key}
                                onChange={(event) => handleChange(index, event)}
                            />
                            <input
                                type='text'
                                name='value'
                                className='p-3 border border-gray-300 rounded flex-1'
                                placeholder={`Value ${index + 1}`}
                                value={info.value}
                                onChange={(event) => handleChange(index, event)}
                            />
                            <button
                                type='button'
                                className='p-3 bg-red-400 text-white rounded hover:bg-red-600'
                                onClick={() => handleRemoveInfo(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                    {additionalInfo.length < 3 && (
                        <button type='button' className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={handleAddInfo}>
                            + Add New Information
                        </button>
                    )}
                </div>
                <hr className="my-4" />
                <div className='flex justify-between items-center mt-4'>
                    <button type='button' className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'>
                        <a href="/my-published-pcfs">Cancel</a>
                    </button>
                    <div className="space-x-4">
                        <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
                            <a href="/my-published-pcfs">Submit</a>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewPcfForm;
