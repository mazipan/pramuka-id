import Link from 'next/link';

function Navigation({ nextLink }) {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/daftar-isi/">
        <button className="mt-8 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded inline-flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Daftar Isi
        </button>
      </Link>
      <Link href={nextLink}>
        <button className="mt-8 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded inline-flex items-center">
          Selanjutnya
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </Link>
    </nav>
  );
}

export default Navigation;
