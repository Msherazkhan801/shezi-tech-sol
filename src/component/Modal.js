import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close modal"
            >
              &#10005;
            </button>
          </div>

          {/* Content */}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
