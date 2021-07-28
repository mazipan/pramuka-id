function SubmitGhIssue() {
  return (
    <div className="mt-4 text-sm text-gray-400">
      Tidak menemukan yang kamu cari? Kamu bisa membuat permintaan penambahan data baru melalui
      {` `}
      <a
        href="https://github.com/mazipan/buku-saku-pramuka/issues/new"
        target="_blank"
        rel="noopenner noreferrer"
        className="text-link-secondary"
      >
        Github issue
      </a>
    </div>
  )
}

export default SubmitGhIssue
