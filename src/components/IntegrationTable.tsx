import React, { useState } from 'react';
import { integrations } from '../data/integrations';

import { faExternalLinkAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Integration = {
  id: number;
  integration: string;
  name: string;
  source: string;
  entity_group: string;
  interval: string;
  connector_url: string;
  instructions: string;
};

const badgeColors: Record<string, string> = {
  Carbon: 'bg-orange-500',
  Utility: 'bg-blue-500',
  Energy: 'bg-green-500',
  Water: 'bg-teal-500',
};

export const IntegrationTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Integration[]>(integrations);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Integration | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const itemsPerPage = 10;
  const filteredData = data.filter(
    item =>
      item.integration.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = (item: Integration) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedItem) {
      setData(prev => prev.filter(i => i.id != selectedItem.id));
    }
    setShowDeleteModal(false);
  };

  const sortByIntegration = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.integration < b.integration) return sortAsc ? -1 : 1;
      if (a.integration > b.integration) return sortAsc ? 1 : -1;
      return 0;
    });
    setData(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div className="p-4">
      <div className="mb-4 w-1/2">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Integration or Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 cursor-pointer" onClick={sortByIntegration}>
              Integration
              <span className="ml-1">{sortAsc ? '↓' : '↑'}</span>
            </th>

            <th className="p-2">Name</th>
            <th className="p-2">Source</th>
            <th className="p-2">Entity/Group</th>
            <th className="p-2">Interval</th>
            <th className="p-2">Connector URL</th>
            <th className="p-2">Instructions</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(item => (
            <tr key={item.id} className="border-t">
              <td className="p-2 truncate max-w-[150px]">{item.integration}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">
                <span
                  className={`text-white px-2 py-1 rounded ${
                    badgeColors[item.source] || 'bg-gray-500'
                  }`}
                >
                  {item.source}
                </span>
              </td>
              <td className="p-2">{item.entity_group}</td>

              <td className="p-2">{item.interval}</td>
              <td className="p-2 text-blue-600 cursor-pointer">{item.connector_url}</td>

              <td className="p-2 text-blue-600 cursor-pointer relative group">
                <span className="underline">View</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />

                {/* Tooltip */}
                <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-100 text-black text-sm p-2 rounded w-64 z-10 mx-auto">
                  {item.instructions}
                </div>
              </td>

              <td className="p-2">
                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setShowEditModal(true);
                  }}
                  className="mr-2 text-gray-600"
                >
                  ✏️
                </button>
                <button onClick={() => handleDelete(item)} className="text-red-600">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
          className="px-4 py-2 border"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
          className="px-4 py-2 border"
        >
          Next
        </button>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <p>Are you sure you want to delete {selectedItem?.name}?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowDeleteModal(false)} className="mr-2 px-4 py-2 border">
                Cancel
              </button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <p>Edit {selectedItem?.name}</p>
            <input
              type="text"
              defaultValue={selectedItem?.name}
              className="border p-2 w-full mt-2"
            />
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowEditModal(false)} className="mr-2 px-4 py-2 border">
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default IntegrationTable;
