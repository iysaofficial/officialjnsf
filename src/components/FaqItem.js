import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl mb-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-5 font-medium text-gray-500 hover:bg-gray-100 gap-3"
      >
        <span>{question}</span>
        <svg
          className={`w-3 h-3 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>

      {open && (
        <div className="p-5 border-t text-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;