import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface Tenant {
  id: number;
  name: string;
  initials: string;
}

interface TenantDropdownProps {
  tenants: Tenant[];
  defaultTenant: string;
  onTenantChange?: (tenantName: string) => void;
}

const TenantDropdown: React.FC<TenantDropdownProps> = ({
  tenants,
  defaultTenant,
  onTenantChange,
}) => {
  const [selectedTenant, setSelectedTenant] = useState(defaultTenant);
  const [isTenantDropdownOpen, setisTenantDropdownOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const filteredTenants = tenants.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()));

  const handleSelectTenant = (tenantName: string) => {
    setSelectedTenant(tenantName);
    setisTenantDropdownOpen(false);
    if (onTenantChange) onTenantChange(tenantName);
  };

  return (
    <div className="relative">
      {/* Collapsed Button */}
      <button
        onClick={() => setisTenantDropdownOpen(!isTenantDropdownOpen)}
        className="flex items-center space-x-2 px-3 py-1 border rounded-md hover:bg-gray-50"
      >
        <span className="text-gray-700 font-semibold">{selectedTenant}</span>
        <FontAwesomeIcon
          icon={isTenantDropdownOpen ? faChevronUp : faChevronDown}
          className="text-gray-500 w-4 h-4"
        />
      </button>

      {/* Dropdown */}
      {isTenantDropdownOpen && (
        <div className="absolute mt-2 w-80  bg-white border rounded-md shadow-lg z-50">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <span>{selectedTenant}</span>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>

          {/* Fixed Links */}
          <div className="px-4 py-2 text-sm text-gray-700 space-y-1 border-b">
            <div className="cursor-default">Help & Guides</div>
            <div className="cursor-default">Terms of Use</div>
            <div className="cursor-default">Privacy Policy</div>
          </div>

          {/* Filter */}
          <div className="px-4 py-2 border-b flex items-center space-x-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <input
              type="text"
              placeholder="Type to filter..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm"
            />
          </div>

          {/* Tenants List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredTenants.map(tenant => (
              <div
                key={tenant.id}
                onClick={() => handleSelectTenant(tenant.name)}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-8 h-8 bg-blue-100 text-blue-600 font-bold rounded flex items-center justify-center mr-2">
                  {tenant.initials}
                </div>
                <span className="text-gray-700 text-sm truncate">{tenant.name}</span>
              </div>
            ))}
            {filteredTenants.length === 0 && (
              <div className="px-4 py-2 text-gray-500 text-sm">No tenants found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantDropdown;
