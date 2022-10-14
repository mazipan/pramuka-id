export interface ContentChildItem {
  text: string
  href: string
  api: string
}
export interface ContentItem {
  text: string
  href: string
  children: ContentChildItem[]
}

const data: ContentItem[] = [
  {
    text: 'Materi Kenegaraan',
    href: '/materi-kenegaraan/',
    children: [
      {
        text: 'Pancasila',
        href: '/materi-kenegaraan/pancasila/',
        api: '/api/pancasila'
      },
      {
        text: 'Pembukaan UUD 1945',
        href: '/materi-kenegaraan/pembukaan-uud-1945/',
        api: '/api/uud1945'
      },
      {
        text: 'Proklamasi',
        href: '/materi-kenegaraan/proklamasi/',
        api: '/api/proklamasi'
      }
    ]
  },
  {
    text: 'Materi Pramuka',
    href: '/materi-pramuka/',
    children: [
      {
        text: 'Dwi Satya',
        href: '/materi-pramuka/dwi-satya/',
        api: '/api/dwi-satya'
      },
      {
        text: 'Dwi Dharma',
        href: '/materi-pramuka/dwi-dharma/',
        api: '/api/dwi-dharma'
      },
      {
        text: 'Tri Satya',
        href: '/materi-pramuka/tri-satya/',
        api: '/api/tri-satya'
      },
      {
        text: 'Dasa Darma',
        href: '/materi-pramuka/dasa-dharma/',
        api: '/api/pancasila'
      },
      {
        text: 'Hymne Pramuka',
        href: '/materi-pramuka/hymne-pramuka/',
        api: '/api/hymne-pramuka'
      },
      {
        text: 'Sandi Ambalan',
        href: '/materi-pramuka/sandi-ambalan/',
        api: '/api/sandi-ambalan'
      },
      {
        text: 'Lambang Pramuka',
        href: '/materi-pramuka/lambang-pramuka/',
        api: '/api/lambang-pramuka'
      },
      {
        text: 'Seragam Pramuka',
        href: '/materi-pramuka/seragam-pramuka/',
        api: '/api/seragam-pramuka'
      },
      {
        text: 'Satuan Karya Pramuka',
        href: '/materi-pramuka/satuan-karya-pramuka/',
        api: '/api/satuan-karya-pramuka'
      },
      {
        text: 'Kwartir',
        href: '/materi-pramuka/kwartir/',
        api: '/api/kwartir'
      }
    ]
  },
  {
    text: 'Materi Kecakapan Umum',
    href: '/materi-kecakapan-umum/',
    children: [
      {
        text: 'Tepuk Pramuka',
        href: '/materi-kecakapan-umum/tepuk-pramuka/',
        api: '/api/tepuk-pramuka'
      },
      {
        text: 'Salam Pramuka',
        href: '/materi-kecakapan-umum/salam-pramuka/',
        api: '/api/salam-pramuka'
      },
      {
        text: 'Bendera Semaphore',
        href: '/materi-kecakapan-umum/bendera-semaphore/',
        api: '/api/bendera-semaphore'
      },
      {
        text: 'Sandi Morse',
        href: '/materi-kecakapan-umum/morse/',
        api: '/api/morse'
      },
      {
        text: 'Sandi Radio',
        href: '/materi-kecakapan-umum/radio/',
        api: '/api/radio'
      },
      {
        text: 'Kompas',
        href: '/materi-kecakapan-umum/kompas/',
        api: '/api/kompas'
      },
      {
        text: 'Lagu-Lagu Pramuka',
        href: '/materi-kecakapan-umum/lagu-lagu-pramuka/',
        api: '/api/lagu-lagu-pramuka'
      },
      {
        text: 'Pedoman SKU',
        href: '/materi-kecakapan-umum/pedoman-sku/',
        api: '/api/pedoman-sku'
      },
      {
        text: 'Tanda Kecakapan Khusus',
        href: '/materi-kecakapan-umum/tanda-kecakapan-khusus/',
        api: '/api/tanda-kecakapan-khusus'
      },
      {
        text: 'Hari Peringatan Nasional',
        href: '/materi-kecakapan-umum/hari-peringatan-nasional/',
        api: '/api/hari-peringatan-nasional'
      },
      {
        text: 'Tali - Temali',
        href: '/materi-kecakapan-umum/tali-temali/',
        api: '/api/tali-temali'
      }
    ]
  }
]

export default data
