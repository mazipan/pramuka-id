interface SeoTextProps {
  text: string
}

function SeoText({ text }: SeoTextProps) {
  return (
    <div className="mt-6 text-sm text-gray-600 dark:text-gray-100">
      <p>{text}</p>
    </div>
  )
}

export default SeoText
