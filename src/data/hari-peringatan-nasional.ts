export interface MonthItem {
  title: string
  key: string
}
export interface HariPentingLain {
  months: MonthItem[]
  januari: string[]
  februari: string[]
  maret: string[]
  april: string[]
  mei: string[]
  juni: string[]
  juli: string[]
  agustus: string[]
  september: string[]
  oktober: string[]
  november: string[]
  desember: string[]
}

export interface LiburNasional {
  description: string
  data: string[]
}
export interface TypesItem {
  title: string
  key: 'hari-libur-nasional' | 'hari-penting-lainnya'
}
export interface PeringatanNasional {
  source: string
  meaning: string
  types: TypesItem[]
  'hari-libur-nasional': LiburNasional
  'hari-penting-lainnya': HariPentingLain
}

export const HARI_LIBUR_NASIONAL = 'hari-libur-nasional'
export const HARI_PENTING_LAINNYA = 'hari-penting-lainnya'

const data: PeringatanNasional = {
  source: 'https://id.wikipedia.org/wiki/Daftar_hari_penting_di_Indonesia',
  meaning:
    'Hari Peringatan Nasional merupakan hari penting nasional di Indonesia yang selalu diperingati setiap tahunnya.',
  types: [
    { title: 'Hari libur nasional', key: HARI_LIBUR_NASIONAL },
    { title: 'Hari penting lainnya', key: HARI_PENTING_LAINNYA }
  ],
  [HARI_LIBUR_NASIONAL]: {
    description:
      'Berikut hari libur nasional di Indonesia. Diurutkan berdasarkan tanggal libur. Disertakan tanggal libur menurut kalendernya, Untuk hari libur yang tidak menyertakan tanggalnya berarti tanggal peringatannya berubah-ubah setiap tahunnya.',
    data: [
      '1 Januari: Tahun baru Masehi',
      'Tahun Baru Imlek (kalender Tionghoa)',
      'Hari Raya Nyepi (Hindu)',
      "27 Rajab: Isra dan Mi'raj Nabi Muhammad SAW (Islam)",
      '1 Mei: Hari Buruh Internasional',
      'Waisak (Buddha)',
      'Kenaikan Isa Almasih (Kristen dan Katolik)',
      '1 Juni: Hari Lahir Pancasila',
      '1 Syawal: Idul Fitri (Islam)',
      '10 Dzulhijah: Idul Adha (Islam)',
      '17 Agustus: Hari Proklamasi Kemerdekaan Republik Indonesia (sejak tahun 1945)',
      '1 Muharram: Tahun Baru Hijriyah (Islam)',
      '12 Rabiul Awwal: Maulid Nabi Muhammad SAW (Islam)',
      '25 Desember: Hari Natal'
    ]
  },
  [HARI_PENTING_LAINNYA]: {
    months: [
      { title: 'Januari', key: 'januari' },
      { title: 'Februari', key: 'februari' },
      { title: 'Maret', key: 'maret' },
      { title: 'April', key: 'april' },
      { title: 'Mei', key: 'mei' },
      { title: 'Juni', key: 'juni' },
      { title: 'Juli', key: 'juli' },
      { title: 'Agustus', key: 'agustus' },
      { title: 'September', key: 'september' },
      { title: 'Oktober', key: 'oktober' },
      { title: 'November', key: 'november' },
      { title: 'Desember', key: 'desember' }
    ],
    januari: [
      '3 Januari: Hari Departemen Agama Republik Indonesia',
      '5 Januari: Hari Korps Wanita Angkatan Laut',
      '10 Januari: Hari Gerakan Satu Juta Pohon',
      '10 Januari: Hari Tritura',
      '10 Januari: Hari Lingkungan Hidup Indonesia',
      '15 Januari: Hari Peristiwa Laut dan Samudera atau Hari Dharma Samudera',
      '25 Januari: Hari Gizi Nasional',
      '25 Januari: Hari Kusta Internasional',
      '26 Januari: Hari Kepabeanan Internasional'
    ],
    februari: [
      '5 Februari: Hari Peristiwa Kapal Tujuh, Hari Lahir Himpunan Mahasiswa Islam (HMI)',
      '9 Februari: Hari Kavaleri',
      '9 Februari: Hari Pers Nasional',
      '14 Februari: Hari Peringatan Pembela Tanah Air (PETA)',
      '14 Februari: Hari Kasih Sayang Sedunia',
      '20 Februari: Hari Pekerja Indonesia',
      '21 Februari: Hari Bahasa Ibu',
      '21 Februari: Hari Peduli Sampah Nasional',
      '22 Februari: Hari Istiqlal',
      '24 Februari: Hari lahir Ikatan Pelajar Nahdlatul Ulama'
    ],
    maret: [
      '1 Maret: Hari Kehakiman Nasional',
      '1 Maret: Hari Peringatan Serangan Umum di Yogyakarta',
      '6 Maret: Hari Komando Strategis Angkatan Darat (Kostrad)',
      '8 Maret: Hari Wanita/Perempuan Internasional',
      '9 Maret: Hari Musik Nasional',
      '10 Maret: Hari Persatuan Artis Film Indonesia (Parfi)',
      '11 Maret: Hari Surat Perintah Sebelas Maret (Supersemar)',
      '21 Maret: Hari Sindrom Down',
      '21 Maret: Hari Teater Boneka',
      '21 Maret: Hari Penghapusan Diskriminasi Rasial Sedunia',
      '22 Maret: Hari Air Sedunia',
      '23 Maret: Hari Meteorologi Sedunia',
      '24 Maret: Hari Peringatan Bandung Lautan Api',
      '27 Maret: Hari Teater Sedunia',
      '27 Maret: Hari Klub Wanita Internasional (bahasa Inggris: Women International Club Day - WIC)',
      '29 Maret: Hari Filateli Indonesia. Hari Lahir Kesatuan Aksi Mahasiswa Muslim Indonesia (KAMMI).',
      '30 Maret: Hari Film Nasional'
    ],
    april: [
      '1 April: Hari Bank Dunia',
      '1 April: Hari Marketing Indonesia (Hamari), Hari Penyiaran Nasional',
      '6 April: Hari Nelayan Nasional',
      '7 April: Hari Kesehatan Internasional',
      '9 April: Hari Penerbangan Nasional, Hari TNI Angkatan Udara',
      '12 April: Hari Bawa Bekal Nasional',
      '16 April: Hari Komando Pasukan Khusus (Kopassus)',
      '17 April: Hari Pergerakan Mahasiswa Islam Indonesia PMII',
      '18 April: Hari Peringatan Konferensi Asia Afrika',
      '19 April: Hari Pertahanan Sipil (Hansip)',
      '20 April: Hari Konsumen Nasional',
      '21 April: Hari Kartini',
      '22 April: Hari Bumi',
      '23 April: Hari Buku',
      '24 April: Hari Angkutan Nasional',
      '24 April: Hari Solidaritas Asia-Afrika',
      '26 April: Hari Kesiapsiagaan Bencana Nasional',
      '27 April: Hari Pemasyarakatan Indonesia',
      '28 April: Hari Puisi Nasional'
    ],
    mei: [
      '1 Mei: Hari Peringatan Pembebasan Irian Barat',
      '1 Mei: Hari Buruh Sedunia',
      '2 Mei: Hari Pendidikan Nasional (Hardiknas)',
      '5 Mei: Hari Lembaga Sosial Desa (LSD)',
      '10 Mei: Hari Lupus Sedunia',
      '11 Mei: Hari POM - TNI',
      '15 Mei: Hari Korps Resimen Mahadjaya/ Jayakarta (Menwa Jayakarta)',
      '16 Mei: Hari Wanadri',
      '17 Mei: Hari Buku Nasional',
      '19 Mei: Hari Korps Cacat Veteran Indonesia',
      '20 Mei: Hari Kebangkitan Nasional, Hari Bakti Dokter Indonesia',
      '21 Mei: Hari Peringatan Reformasi',
      '23 Mei: Hari Penyu Sedunia',
      '29 Mei: Hari Keluarga, Hari Lanjut Usia',
      '31 Mei: Hari Tanpa Tembakau Sedunia'
    ],
    juni: [
      '1 Juni: Hari Lahir Pancasila',
      '1 Juni: Hari Perlindungan Anak-anak Sedunia',
      '1 Juni: Hari Susu Nusantara',
      '3 Juni: Hari Pasar Modal Indonesia',
      '5 Juni: Hari Lingkungan Hidup Sedunia',
      '8 Juni: Hari Laut Sedunia',
      '10 Juni: Hari Media Sosial',
      '15 Juni: Hari Demam Berdarah Dengue ASEAN',
      '17 Juni: Hari Dermaga',
      '21 Juni: Hari Krida Pertanian',
      '22 Juni: Hari Ulang Tahun Kota Jakarta (sejak tahun 1527)',
      '24 Juni: Hari Bidan Nasional',
      '26 Juni: Hari Anti Narkoba',
      '29 Juni: Hari Keluarga Berencana'
    ],
    juli: [
      '1 Juli: Hari Bhayangkara',
      '1 Juli: Hari Buah',
      '2 Juli: Hari Kelautan Nasional',
      '5 Juli: Hari Bank Indonesia',
      '9 Juli: Hari Satelit Palapa',
      '12 Juli: Hari Koperasi',
      '14 Juli: Hari Pajak',
      '22 Juli: Hari Kejaksaan',
      '23 Juli: Hari Anak Nasional',
      '23 Juli: Hari Komite Nasional Pemuda Indonesia (KNPI)',
      '27 Juli: Hari Sungai Nasional',
      '29 Juli: Hari Bhakti TNI Angkatan Udara',
      '31 Juli: Hari Lahir Korps Pelajar Islam Indonesia (PII) Wati'
    ],
    agustus: [
      '5 Agustus: Hari Dharma Wanita Nasional',
      '8 Agustus: Hari Ulang Tahun ASEAN',
      '10 Agustus: Hari Veteran Nasional',
      '10 Agustus: Hari Kebangkitan Teknologi Nasional',
      '12 Agustus: Hari Wanita TNI Angkatan Udara (Wara)',
      '13 Agustus: Hari Peringatan Pangkalan Brandan Lautan Api',
      '14 Agustus: Hari Pramuka',
      '17 Agustus: Hari Proklamasi Kemerdekaan Republik Indonesia (sejak tahun 1945)',
      '18 Agustus: Hari Konstitusi Republik Indonesia (sejak tahun 1945)',
      '19 Agustus: Hari Departemen Luar Negeri Indonesia',
      '21 Agustus: Hari Maritim Nasional'
    ],
    september: [
      '1 September: Hari Buruh',
      '1 September: Hari Polisi Wanita (Polwan)',
      '8 September: Hari Aksara',
      '8 September: Hari Pamong Praja',
      '9 September: Hari Olahraga Nasional',
      '11 September: Hari Radio Republik Indonesia (RRI)',
      '11 September: Hari Peringatan Serangan 11 September 2001',
      '17 September: Hari Palang Merah Indonesia',
      '17 September: Hari Perhubungan Nasional',
      '21 September: Hari Perdamaian Dunia',
      '23 September: Hari Bahasa Isyarat Internasional',
      '24 September: Hari Tani',
      '26 September: Hari Statistik',
      '27 September: Hari Pos Telekomunikasi Telegraf (PTT)',
      '28 September: Hari Kereta Api',
      '28 September: Hari Komunitas Nasional',
      '28 September: Hari Rabies Sedunia',
      '28 September: Hari Tunarungu Internasional',
      '29 September: Hari Sarjana Nasional',
      '29 September: Hari Jantung Sedunia',
      '30 September: Hari Peringatan Gerakan 30 September 1965'
    ],
    oktober: [
      '(Setiap Hari Senin Pertama Oktober): Hari Habitat',
      '1 Oktober: Hari Kesaktian Pancasila',
      '1 Oktober: Hari Bea dan Cukai',
      '2 Oktober: Hari Batik Nasional',
      '4 Oktober: Hari Hewan Sedunia',
      '5 Oktober: Hari Tentara Nasional Indonesia (TNI)',
      '(Setiap Hari Kamis Kedua Oktober): Hari Mata Sedunia',
      '10 Oktober: Hari Kesehatan Jiwa',
      '12 Oktober: Hari Museum Nasional',
      '12 Oktober: Hari Radang Sendi (Artritis) Sedunia',
      '15 Oktober: Hari Hak Asasi Binatang',
      '16 Oktober: Hari Parlemen Indonesia',
      '16 Oktober: Hari Pangan Sedunia',
      '22 Oktober: Hari Santri Nasional',
      '24 Oktober: Hari Dokter Nasional',
      '24 Oktober: Hari Perserikatan Bangsa-Bangsa (PBB)',
      '24 Oktober: Hari Polio Sedunia',
      '27 Oktober: Hari Listrik Nasional',
      '27 Oktober: Hari Penerbangan Nasional',
      '27 Oktober: Hari Narablog Nasional',
      '28 Oktober: Hari Sumpah Pemuda',
      '29 Oktober: Hari Stroke Sedunia',
      '30 Oktober: Hari Keuangan'
    ],
    november: [
      '1 November: Hari Inovasi Indonesia',
      '5 November: Hari Cinta Puspa dan Satwa Nasional',
      '10 November: Hari Pahlawan (Indonesia)',
      '10 November: Hari Ganefo',
      '11 November: Hari Bangunan Indonesia',
      '12 November: Hari Ayah Nasional',
      '12 November: Hari Kesehatan Nasional',
      '14 November: Hari Brigade Mobil (BRIMOB)',
      '14 November: Hari Diabetes internasional',
      '16 November: Hari Toleransi Internasional',
      '19 November: Hari Pria/Laki-laki Internasional',
      '20 November: Hari Anak-anak Sedunia',
      '21 November: Hari Pohon',
      '22 November: Hari Perhubungan Darat',
      '25 November: Hari Guru',
      '28 November: Hari Menanam Pohon Indonesia',
      '28 November: Hari Dongeng Nasional',
      '29 November: Hari Korps Pegawai Republik Indonesia (KORPRI)'
    ],
    desember: [
      '1 Desember: Hari AIDS Sedunia',
      '3 Desember: Hari Penyandang Cacat Internasional',
      '4 Desember: Hari Artileri',
      '5 Desember: Hari Armada',
      '9 Desember: Hari Anti Korupsi',
      '10 Desember: Hari Hak Asasi Manusia',
      '12 Desember: Hari Transmigrasi',
      '12 Desember: Hari Belanja Online Nasional (Harbolnas)',
      '13 Desember: Hari Nusantara',
      '15 Desember: Hari Infanteri[butuh rujukan]',
      '19 Desember: Hari Bela Negara',
      '20 Desember: Hari Kesetiakawanan Sosial Nasional',
      '22 Desember: Hari Ibu Nasional',
      '22 Desember: Hari Sosial',
      '22 Desember: Hari Korps Wanita Angkatan Darat (KOWAD)',
      '25 Desember: Hari Natal'
    ]
  }
}

export default data
