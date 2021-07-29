import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

interface CardListProps {
  title: string
  href: string
  subtitle?: string
  external?: boolean
}

function CardList({ title, subtitle, href, external }: CardListProps) {
  const firstLetter = title.charAt(0).toUpperCase()

  return (
    <div className="flex overflow-hidden justify-between items-center mt-4 w-full rounded-md shadow-lg dark:border dark:border-gray-30">
      <div className="flex w-full">
        <div className="flex justify-center items-center w-16 text-xl font-bold text-gray-100 bg-yellow-900 rounded-l-md">
          {firstLetter}
        </div>
        <div className="p-2 w-full">
          {external ? (
            <>
              <a
                className="font-bold capitalize text-link"
                title={title}
                href={href}
                target="_blank"
                rel="noopenner noreferrer"
              >
                {title}
              </a>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </>
          ) : (
            <>
              <Link href={href}>
                <a className="font-bold capitalize text-link" title={title} href={href}>
                  {title}
                </a>
              </Link>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </>
          )}
        </div>
      </div>
      <div className="px-2">
        <FiChevronRight className="w-6 h-6" />
      </div>
    </div>
  )
}

export default CardList
