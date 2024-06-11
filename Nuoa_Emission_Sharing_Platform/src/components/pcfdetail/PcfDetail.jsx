import React from 'react';

function PcfDetail() {
  const pcfDetails = {
    pcfId: 'abc4',
    productId: 'product4',
    productName: 'Car Seat',
    amount: '100',
    emissionPerUnit: '5 kg',
    version: '1',
    status: 'Active',
    additionalInfo: [
      { key: 'Color', value: 'Red' },
      { key: 'Size', value: 'Medium' },
    ],
  };

  return (
    <div className="mt-6 mx-4 p-6 bg-white shadow-lg rounded-lg flex-1">
      <div className="flex justify-between items-center mb-4">
        <div className="text-3xl font-semibold">PCF Details</div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">PCF ID</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.pcfId}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">Product ID</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.productId}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">Product Name</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.productName}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">Amount</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.amount}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">Emission per Unit</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.emissionPerUnit} tCO2</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">Version</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.version}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-lg font-medium">Status</label>
          <div className="flex-1 p-3 border border-gray-300 rounded">{pcfDetails.status}</div>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium">Additional Information</label>
          {pcfDetails.additionalInfo.map((info, index) => (
            <div key={index} className="flex items-center mb-2">
              <strong className="w-1/3">{info.key}:</strong>
              <div className="flex-1 p-3 border border-gray-300 rounded">{info.value}</div>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center mt-4">
          <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            <a href="/my-published-pcfs">Back</a>
          </button>
          <div className="space-x-4">
            <button type="button" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              <a href="/my-published-pcfs">Mark Deprecated</a>
            </button>
            <button type="button" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              <a href="/my-published-pcfs/update-pcf">Update PCF</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PcfDetail;
