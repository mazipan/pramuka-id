function SubmitGhIssue() {
  return (
    <div className="mt-4 text-sm text-gray-600 dark:text-gray-100">
      Tidak menemukan yang kamu cari? Kamu bisa membuat permintaan penambahan data baru melalui
      {` `}
      <a
        href="https://github.com/mazipan/pramuka.online/issues/new"
        target="_blank"
        rel="noopenner noreferrer"
        className="text-link"
      >
        Github issue
      </a>
    </div>
  )
}

export default SubmitGhIssue
