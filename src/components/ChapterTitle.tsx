interface ChapterTitleProps {
  subTitle: string;
  title: string;
}

function ChapterTitle({ subTitle, title }: ChapterTitleProps) {
  return (
    <div className="mt-8 mb-8 text-center">
      <div>{title}</div>
      <h1 className="font-bold text-3xl md:text-4xl">{subTitle}</h1>
    </div>
  )
}

export default ChapterTitle
