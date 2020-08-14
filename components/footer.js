function Footer() {
  return (
    <footer className="bg-indigo-500">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
        <li>
          Dibuat oleh{" "}
          <a href="https://mazipan.space/" target="_blank" className="font-bold">
            Irfan Maulana
          </a>
        </li>

        <li>
          <a
            href="https://github.com/mazipan/buku-saku-pramuka"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
