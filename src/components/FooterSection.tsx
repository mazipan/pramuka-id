function Footer() {
  return (
    <footer className="bg-pramuka">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-nav md:p-8">
        <li>
          Dibuat oleh{' '}
          <a
            href="https://mazipan.space/"
            target="_blank"
            rel="noopenner noreferrer"
            className="font-bold"
          >
            Irfan Maulana
          </a>
        </li>

        <li>
          <a
            href="https://github.com/mazipan/buku-saku-pramuka"
            target="_blank"
            rel="noopenner noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
