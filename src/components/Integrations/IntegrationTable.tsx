import React, { useState } from 'react';
import { integrations } from './integrationTableData';

import { faExternalLinkAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import ActionModal from './ActionModal';
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

const badgeStyles: Record<string, { bg: string; text: string; ring: string }> = {
  Carbon: { bg: 'bg-orange-50', text: 'text-orange-600', ring: 'ring-1 ring-orange-400' },
  Utility: { bg: 'bg-teal-50', text: 'text-teal-600', ring: 'ring-1 ring-teal-400' },
  Energy: { bg: 'bg-green-50', text: 'text-green-600', ring: 'ring-1 ring-green-400' },
  Water: { bg: 'bg-cyan-50', text: 'text-cyan-600', ring: 'ring-1 ring-cyan-400' },
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

  const handleCopyClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard ✅', {
      duration: 2000,
      style: {
        background: '#333',
        color: '#fff',
      },
    });
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
            className="text-sm border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-white">
        <table className="min-w-full  text-sm">
          <thead>
            <tr className="bg-white">
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
                    className={`px-3 py-1 rounded ${badgeStyles[item.source]?.bg || 'bg-gray-50'} ${
                      badgeStyles[item.source]?.text || 'text-gray-600'
                    } ${badgeStyles[item.source]?.ring || 'ring-1 ring-gray-400'}`}
                  >
                    {item.source}
                  </span>
                </td>
                <td className="p-2">{item.entity_group}</td>

                <td className="p-2">{item.interval}</td>
                <td className="p-2 text-cyan-500 cursor-pointer hover:underline">
                  <button
                    onClick={() => handleCopyClipboard(item.connector_url)}
                    className="text-cyan-500 hover:underline"
                  >
                    Copy to Clipboard
                  </button>
                </td>

                <td className="p-2 text-cyan-500 cursor-pointer hover:underline relative group">
                  <span className="underline">View</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />

                  {/* Tooltip */}
                  <div
                    className="absolute left-[-120px] top-full mt-1 hidden group-hover:block 
                    bg-white text-black text-sm p-2 rounded w-64 z-10 mx-auto
                    border-2 border-gray-400"
                  >
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
        <div className="flex items-center justify-center space-x-2 my-4">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="border rounded px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 flex items-center"
          >
            ← Previous
          </button>

          {/* Page Numbers */}
          {(() => {
            const pages: (number | string)[] = [];
            pages.push(1);
            if (currentPage > 3) pages.push('...');
            for (
              let i = Math.max(2, currentPage - 1);
              i <= Math.min(totalPages - 1, currentPage + 1);
              i++
            ) {
              pages.push(i);
            }
            if (currentPage < totalPages - 2) pages.push('...');
            if (totalPages > 1) pages.push(totalPages);

            return pages.map((p, idx) =>
              typeof p === 'number' ? (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(p)}
                  className={`px-3 py-2 rounded ${
                    p === currentPage ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              ) : (
                <span key={idx} className="px-2 text-gray-500">
                  {p}
                </span>
              )
            );
          })()}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="border rounded px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 flex items-center"
          >
            Next →
          </button>
        </div>
      </div>

      {showDeleteModal && selectedItem && (
        <ActionModal
          icon={
            <div className="bg-red-100 rounded-full p-3 inline-flex items-center justify-center">
              <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xl">✕</span>
              </div>
            </div>
          }
          title={`Remove “${selectedItem.name}” Connection?`}
          description={`Are you sure you want to remove ${selectedItem.integration} “${selectedItem.name}” connection?`}
          primaryButtonText="Remove"
          primaryButtonColor="bg-red-600 hover:bg-red-700"
          secondaryButtonText="Undo"
          secondaryButtonColor="border-gray-300 hover:bg-gray-100"
          onPrimaryAction={confirmDelete}
          onSecondaryAction={() => setShowDeleteModal(false)}
          onClose={() => setShowDeleteModal(false)}
        />
      )}

      {showEditModal && selectedItem && (
        <ActionModal
          icon={
            <div className="bg-yellow-100 rounded-full p-3 inline-flex items-center justify-center">
              <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xl">!</span>
              </div>
            </div>
          }
          title="Change to Existing Connection"
          description={`Changes may disrupt functionality and impact data flow.
    Are you sure you want to make changes to ${selectedItem.integration} “${selectedItem.name}” connection?`}
          primaryButtonText="Save Changes"
          primaryButtonColor="bg-gray-900 hover:bg-gray-800"
          secondaryButtonText="Undo"
          secondaryButtonColor="border-gray-300 hover:bg-gray-100"
          onPrimaryAction={() => {
            // Save logic
            setShowEditModal(false);
          }}
          onSecondaryAction={() => setShowEditModal(false)}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};
export default IntegrationTable;
