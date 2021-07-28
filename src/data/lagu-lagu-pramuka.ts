export interface Song {
  title: string
  key: string
  lyric: string
  audio: string
  youtube: string
}

export interface Lyrics {
  hymne_pramuka: string[][]
  alam_bebas: string[][]
  di_sini_kita_bertemu: string[][]
  pisah_hanya_dilahirnya: string[][]
}

export interface LaguPramuka {
  title: string
  subtitle: string
  description: string
  source: string
  songs: Song[]
  lyrics: Lyrics
}

const data: LaguPramuka = {
  title: 'Materi Kecakapan Umum',
  subtitle: 'Lagu-lagu Pramuka',
  description: 'Kumpulan lagu-lagu dalam kegiatan kepramukaan',
  source: 'https://www.pramukaindonesia.com/2015/07/download-kumpulan-lagu-lagu-pramuka.html',
  songs: [
    {
      title: 'Hymne Pramuka',
      key: 'hymne-pramuka',
      lyric: 'hymne_pramuka',
      audio: '/audio/hymne-pramuka.mp3',
      youtube: 'https://www.youtube.com/watch?v=fo0Hoo6jnm0'
    },
    {
      title: 'Alam Bebas',
      key: 'alam-bebas',
      lyric: 'alam_bebas',
      audio: '/audio/alam-bebas.mp3',
      youtube: 'https://www.youtube.com/watch?v=KCn4-_7qeg4'
    },
    {
      title: 'Di sini Kita Bertemu',
      key: 'di-sini-kita-bertemu',
      lyric: 'di_sini_kita_bertemu',
      audio: '/audio/di-sini-kita-bertemu.mp3',
      youtube: 'https://www.youtube.com/watch?v=9fuDUDdd6IQ'
    },
    {
      title: 'Pisah Hanya di Lahirnya',
      key: 'pisah-hanya-di-lahirnya',
      lyric: 'pisah_hanya_dilahirnya',
      audio: '/audio/pisah-hanya-dilahirnya.mp3',
      youtube: 'https://www.youtube.com/watch?v=ZfhweSRPuFI'
    }
  ],
  lyrics: {
    hymne_pramuka: [
      [
        'Kami Pramuka Indonesia',
        'Manusia Pancasila',
        'Satyaku Kudarmakan',
        'Darmaku Kubaktikan',
        'Agar Jaya Indonesia',
        'Indonesia Tanah Airku',
        'Kami Jadi Pandumu'
      ]
    ],
    alam_bebas: [
      ['Alam yang luas bebas', 'Kaya tiada batas', 'selalu sedia dia', 'bagi kita semua'],
      ['Alam yang indah megah', 'selalu sedia', 'Memberi ajarannya', 'Pandangan luas'],
      [
        'Mari kita sekolah di sana',
        'Agar dapat nuansa pandangan',
        'Di sana kita kan belajar berpandangan luas'
      ]
    ],
    di_sini_kita_bertemu: [
      [
        'Disinilah disinilah kita pun bertemu',
        'Kita pun bertemu kawan berjabatan tangan',
        'Disinilah disinilah kita pun berkumpul',
        'Kita pun berkumpul kawan bersatu tujuan'
      ],
      ['Memupuk membina semangat gotong royong', 'Mengembangkan sikap suka tolong menolong'],
      ['Dimana pun Dimana pun Pramuka berada', 'Pramuka berada kawan sebagai saudara']
    ],
    pisah_hanya_dilahirnya: [
      [
        'Telah tiba saat berpisah',
        'Pisah hanya di lahirnya',
        'Di hati kita tetaplah satu',
        'Karna janji pramuka kita'
      ],
      [
        'Dalam hati kita tetap ingat',
        'Akan dasadarmaku',
        'Dan aku pun tetap bersyukur',
        'Pada Tuhan Yang Maha Luhur'
      ]
    ]
  }
}

export default data
