import { useState } from "react";

const Expansion = ({ title, i, value }) => {
  const [collapsed, setCollapsed] = useState(-1);

  const handleCollapse = (index) => {
    if (collapsed === index) {
      setCollapsed(-1);
    } else {
      setCollapsed(index);
    }
  };

  return (
    <div className="text-left">
      <div className="mt-4 rounded overflow-hidden shadow-lg">
        <div className="w-full px-6 py-4 flex items-center justify-between flex-wrap">
          <div className="font-bold text-xl min-w-250">{title}</div>

          <button
            onClick={() => {
              handleCollapse(i);
            }}
            className="bg-secound-2 hover:bg-secound-1 text-light py-2 px-4 rounded inline-flex items-center"
          >
            {collapsed === i ? "Tutup detail" : "Lihat detail"}
            <svg
              className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
                collapsed === i ? "-rotate-180" : "rotate-0"
              } `}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        <div
          className={`transition duration-150 ease-in-out ${
            collapsed === i ? "block" : "hidden"
          }`}
        >
          <div className="w-full px-6 py-4">
            <ul className="text-gray-700">{value}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expansion;
