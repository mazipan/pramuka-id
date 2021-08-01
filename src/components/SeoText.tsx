interface SeoTextProps {
  text: string
}

function SeoText({ text }: SeoTextProps) {
  return (
    <div className="mt-6 text-sm text-gray-400">
      <p>{text}</p>
    </div>
  )
}

export default SeoText
