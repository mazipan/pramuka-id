import Link from 'next/link'

interface CardListProps {
  title: string
  href: string
  subtitle?: string
}

function CardList({ title, subtitle, href }: CardListProps) {
  return (
    <div className="flex overflow-hidden justify-between items-center mt-4 w-full rounded-md shadow-lg dark:border bg-card dark:border-gray-30">
      <Link href={href}>
        <a
          href={href}
          className="inline-flex relative flex-col flex-1 justify-end items-center p-4 space-y-2 h-full rounded-xl"
        >
          <p className="w-full text-lg font-semibold">{title}</p>
          {subtitle && (
            <p className="pb-8 w-full text-sm tracking-wide leading-tight">{subtitle}</p>
          )}
        </a>
      </Link>
    </div>
  )
}

export default CardList
