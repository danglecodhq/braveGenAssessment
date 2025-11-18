import { useRef, useState } from 'react';

const DropdownMenuLightSimple = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Open the menu on hover
  const handleMouseEnter = () => setIsOpen(true);

  // Close the menu when leaving the area of the button or the menu itself
  const handleMouseLeave = () => setIsOpen(false);

  // Use Tailwind classes to show/hide the menu with transition effects
  const menuClasses = `absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transition-all duration-100 ease-out ${
    isOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
  }`;

  return (
    // Wrapper div to handle onMouseLeave events for the entire button+menu area
    <div
      className="relative inline-block text-left ml-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <button
          type="button"
          // Trigger button: square shape, blue background, "DL" text
          className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          DL
        </button>
      </div>

      {/* Dropdown menu container */}
      <div ref={dropdownRef} className={menuClasses}>
        <div className="py-1">
          {/* Account Settings option */}
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Account Settings
          </a>
        </div>
        {/* The divide-y class on the parent div handles the divider line automatically */}
        <div className="py-1">
          {/* Sign Out option */}
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuLightSimple;
