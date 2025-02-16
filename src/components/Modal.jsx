const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md  overflow-auto max-h-screen">
        <button
          className=" absolute top-10 right-20 text-gray-300 text-3xl"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
