function ChapterTitle({ babText, babNumber }) {
  return (
    <div className="text-center">
			<h1 className="mt-8 mb-8 font-bold text-3xl md:text-4xl">
				{babNumber}
				<br />
				{babText}
			</h1>
		</div>
  );
}

export default ChapterTitle;
