import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[80vh] flex flex-col mx-4 rounded-lg">
        <div className="flex justify-between items-center p-2 border-b bg-[#2596be] text-white rounded-t-lg">
          <h2 className="text-lg font-semibold flex justify-center gap-2">
            <img
              src="/icons/search-list.svg"
              alt="Search List"
              className="h-6"
            />{" "}
            {title}
          </h2>
          <button
            onClick={onClose}
            className="hover:text-gray-700 font-bold text-lg"
          >
            ×
          </button>
        </div>
        <div className="p-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
