function Footer() {
  return (
    <footer className="bg-pramuka">
      <ul className="flex justify-between items-center p-4 mx-auto max-w-4xl text-sm md:p-8 text-nav">
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
