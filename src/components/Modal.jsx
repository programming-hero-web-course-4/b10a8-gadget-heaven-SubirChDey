import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Button to Open Modal */}
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Open Modal
      </button>
    
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello, Subir!</h3>
            <p className="py-4">This is a dynamic modal using DaisyUI.</p>
            <div className="modal-action">
              <button onClick={() => setIsOpen(false)} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;