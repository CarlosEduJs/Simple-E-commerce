import { useState, useRef, useEffect } from "react";

export default function Dropdown({ buttonContent, children, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button onClick={() => setIsOpen(true)}>{buttonContent}</button>

      {isOpen && (
        <div className={`absolute ${position}-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10`}>
          {children}
        </div>
      )}
    </div>
  );
}
