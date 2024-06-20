import React, { useState } from 'react';

function Tabs({ className, deskripsi, warna, berat }) {
  const [activeTab, setActiveTab] = useState('description');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 text-gray-700 font-semibold focus:outline-none transition duration-300 ${
            activeTab === 'description' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => openTab('description')}
        >
          Deskripsi
        </button>
        <button
          className={`py-2 px-4 text-gray-700 font-semibold focus:outline-none transition duration-300 ${
            activeTab === 'specification' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => openTab('specification')}
        >
          Spesifikasi
        </button>
      </div>

      <div className="my-4">
        <div
          className={`transition-opacity duration-300 ${
            activeTab === 'description' ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <h3 className="text-lg font-semibold">Deskripsi</h3>
          <div className="text-gray-600">
            <p>{deskripsi}</p>
          </div>
        </div>

        <div
          className={`transition-opacity duration-300 ${
            activeTab === 'specification' ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <h3 className="text-lg font-semibold">Spesifikasi</h3>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Warna
                </th>
                <th className="py-2 px-4 border border-gray-300 ">{warna}</th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Berat
                </th>
                <th className="py-2 px-4 border border-gray-300 ">{berat}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
