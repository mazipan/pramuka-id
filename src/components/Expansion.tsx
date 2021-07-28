import { useState } from 'react'

interface ExpansionProps {
  index: number;
  title: string;
  value: string;
}

const Expansion = ({ index, title, value }: ExpansionProps) => {
  const [collapsed, setCollapsed] = useState(-1)

  const handleCollapse = (index: number) => {
    if (collapsed === index) {
      setCollapsed(-1)
    } else {
      setCollapsed(index)
    }
  }

  return (
    <div className="overflow-hidden mt-4 rounded shadow-lg bg-card">
      <div className="flex flex-wrap justify-between items-center py-4 px-6 w-full">
        <div className="text-xl font-bold min-w-250">{title}</div>

        <button
          onClick={() => {
            handleCollapse(index)
          }}
          className="inline-flex items-center py-2 px-4 rounded bg-primary text-button hover:bg-hover"
        >
          {collapsed === index ? 'Tutup detail' : 'Lihat detail'}
          <svg
            className={`w-4 h-4 ml-2 transition ease-in-out duration-500 transform ${
              collapsed === index ? '-rotate-180' : 'rotate-0'
            }`}
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
          collapsed === index ? 'block' : 'hidden'
        }`}
      >
        <div className="py-4 px-6 w-full">
          <ul className="text-secondary">{value}</ul>
        </div>
      </div>
    </div>
  )
}

export default Expansion
