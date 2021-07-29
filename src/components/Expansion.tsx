import { ReactNode, useState } from 'react'

interface ExpansionProps {
  title: string
  value: string | ReactNode
  initialState: boolean
}

const Expansion = ({ title, value, initialState }: ExpansionProps) => {
  const [collapsed, setCollapsed] = useState(initialState)

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="overflow-hidden mt-4 rounded-md shadow-lg dark:border bg-card dark:border-gray-30">
      <div className="flex justify-between items-center py-4 px-6 w-full">
        <div className="text-xl font-bold">{title}</div>

        <button
          onClick={() => {
            handleCollapse()
          }}
          type="button"
          aria-label={collapsed ? 'Tutup' : 'Buka'}
          className="inline-flex items-center p-2 rounded-md bg-primary text-button hover:bg-hover"
        >
          <svg
            className={`w-6 h-6 transition ease-in-out duration-500 transform ${
              collapsed ? '-rotate-180' : 'rotate-0'
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
      <div className={`transition duration-150 ease-in-out ${collapsed ? 'block' : 'hidden'}`}>
        <div className="py-4 px-6 w-full">
          <ul className="text-secondary">{value}</ul>
        </div>
      </div>
    </div>
  )
}

export default Expansion
