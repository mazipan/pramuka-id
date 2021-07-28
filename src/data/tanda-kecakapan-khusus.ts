export interface TandaKecakapanUmumGroup {
  text: string
  description: string
  lists: string[]
}
export interface TandaKecakapanUmumSection {
  name: string
  description: string
  groupType: string
  groups: string[] | TandaKecakapanUmumGroup[]
}
export interface TandaKecakapanUmum {
  title: string
  subtitle: string
  description: string
  source: string
  meaning: string
  sections: TandaKecakapanUmumSection[]
}

const data: TandaKecakapanUmum = {
  title: 'Materi Kecakapan Umum',
  subtitle: 'Tanda Kecakapan Khusus',
  description: 'Penjelasan lengkap mengenai Tanda Kecakapan Khusus (TKK)',
  source: 'https://www.pramukaindonesia.com/2015/02/tanda-kecakapan-khusus-tkk-pramuka.html',
  meaning:
    'Tanda Kecakapan Khusus (TKK) Pramuka merupakan tanda yang diberikan kepada peserta didik sebagai bentuk apresiasi atas kemampuan seorang peserta didik dalam suatu bidang tertentu. TKK bersifat opsional bagi peserta didik, sehingga seorang peserta didik dapat memiliki TKK yang berbeda dari peserta didik lain.',
  sections: [
    {
      name: 'Warna Tanda Kecakapan Khusus Berdasarkan Jenis Bidang Keahlian',
      description:
        'Pembagian TKK berdasarkan bidang keahlian ditandai dengan perbedaan Warna Dasar dari TKK tersebut',
      groupType: 'object',
      groups: [
        {
          text: 'Warna Putih',
          description: 'Warna putih Untuk TKK Bidang Kesehatan dan Ketangkasan',
          lists: [
            'TKK Gerak Jalan',
            'TKK Pengamat',
            'TKK Penyelidik',
            'TKK Perenang',
            'TKK Juru Layar',
            'TKK Juru Selam',
            'TKK Pendayung',
            'TKK Ski Air',
            'TKK Pencak Silat',
            'TKK Posyandu/TKK Keluarga Berencana'
          ]
        },
        {
          text: 'Warna Kuning',
          description:
            'Warna Kuning Untuk TKK Bidang Agama, Mental, Moral, Spiritual, Pembentukan Pribadi, dan Watak',
          lists: [
            'TKK Salat',
            'TKK Khatib',
            'TKK Qori',
            'TKK Muadzin',
            'TKK Penabung',
            'TKK Doa',
            'TKK Gereja',
            'TKK Pelayanan',
            'TKK Saksi Kristus',
            'TKK Terang Alkitab',
            'TKK Suluh Gereja',
            'TKK Bhakti',
            'TKK Dharmapala',
            'TKK Wicaksana',
            'TKK Dana Punia',
            'TKK Bhakti',
            'TKK Pendidikan KB'
          ]
        },
        {
          text: 'Warna Hijau',
          description: 'Warna hijau Untuk TKK Bidang Keterampilan Teknik Pembangunan',
          lists: [
            'TKK Penjilid Buku',
            'TKK Juru Potret',
            'TKK Juru Kulit',
            'TKK Juru Logam',
            'TKK Penenun',
            'TKK Penangkap Ikan',
            'TKK Juru Kebun',
            'TKK Peternak Ulat Sutera',
            'TKK Peternak Lebah',
            'TKK Peternak Kelinci',
            'TKK Filateli',
            'TKK Pengumpul Lencana',
            'TKK Pengumpul Mata Uang',
            'TKK Pengumpul Tanaman Kering',
            'TKK Pengumpul Tanaman Hidup',
            'TKK Juru Masak',
            'TKK Pecinta Dirgantara',
            'TKK Pembuat Pesawat Model',
            'TKK Pengenal Cuaca',
            'TKK Komunikasi',
            'TKK Penjelajah',
            'TKK Juru Peta',
            'TKK Juru Navigasi Laut',
            'TKK Juru Isyarat Bendera',
            'TKK Pelaut',
            'TKK Pengembara',
            'TKK Petani Padi',
            'TKK Penanam Tanaman Hias',
            'TKK Petani Cabai',
            'TKK Juru Bambu',
            'TKK Juru Anyam',
            'TKK Juru Kayu',
            'TKK Juru Batu',
            'TKK Peternak Itik',
            'TKK Peternak Ayam',
            'TKK Peternak Sapi',
            'TKK Peternak Merpati',
            'TKK Pengumpul',
            'TKK Pengumpul Benda',
            'TKK Pengumpul Hewan',
            'TKK Juru Semboyan',
            'TKK Penjahit',
            'TKK Pengendara Sepeda',
            'TKK Juru Konstruksi Pesawat Udara',
            'TKK Juru Mesin Pesawat Udara',
            'TKK Juru Navigasi Udara',
            'TKK Juru Evakuasi Mesin',
            'TKK Pengenal Pesawat Udara',
            'TKK Juru Isyarat Elektronika',
            'TKK Juru Isyarat Optika',
            'TKK Perencana Kapal',
            'TKK Perahu Motor',
            'TKK Berkemah',
            'TKK Petani Bawang',
            'TKK Petani Tanaman Jalar',
            'TKK Peternak Belut',
            'TKK Peternak Lele',
            'TKK Statistika Keluarga Berencana',
            'TKK Pengatur Ruangan',
            'TKK Pengatur Meja Makan'
          ]
        },
        {
          text: 'Warna Biru',
          description:
            'Warna biru Untuk TKK Bidang Sosial, Perikemanusiaan, Gotong Royong, Ketertiban, Masyarakat, Perdamaian Dunia, dan Lingkungan Hidup',
          lists: [
            'TKK Pemadam Kebakaran',
            'TKK Pengatur Lalu Lintas',
            'TKK Pengamanan Lingkungan',
            'TKK Penunjuk Jalan',
            'TKK Juru Bahasa',
            'TKK Juru Penerang',
            'TKK Korespondensi',
            'TKK Pertolongan Pertama Pada Kecelakaan',
            'TKK Penyuluh Padi',
            'TKK Keadaan Darurat Udara',
            'TKK Keadaan Darurat Laut',
            'TKK Pembantu Ibu',
            'TKK Pengasuh Anak',
            'TKK Penerima Tamu',
            'TKK Pendaki Gunung',
            'TKK Juru Ukur',
            'TKK Kependudukan',
            'TKK Pendataan Keluarga Berencana',
            'TKK Kesejahteraan Keluarga'
          ]
        },
        {
          text: 'Warna Merah',
          description: 'Warna merah Untuk TKK Bidang Patriotisme dan Seni Budaya',
          lists: [
            'TKK Dirigen',
            'TKK Penyanyi',
            'TKK Pelukis',
            'TKK Juru Gambar',
            'TKK Pengarang',
            'TKK Pembaca',
            'TKK Pengatur Rumah'
          ]
        }
      ]
    },
    {
      name: 'TKK Berdasarkan Tingkatan',
      description: 'Tanda Kecakapan Khusus juga dibedakan menjadi 3 dengan bentuk berbeda',
      groupType: 'array',
      groups: [
        'TKK Purwa berbentuk Lingkaran',
        'TKK Madya berbentuk Persegi',
        'TKK Utama berbentuk Persegi 5',
        'TKK Untuk siaga berbentuk Segitiga berwarna Hijau'
      ]
    },
    {
      name: 'Tingkatan Berdasarkan Satuan Golongan Pramuka',
      description: 'Warna Bordir pada TKK mengikuti warna dasar tanda pengenal pramuka',
      groupType: 'array',
      groups: [
        'TKK siaga berwarna Hijau',
        'TKK penggalang Berbordir Warna Merah',
        'TKK Penegak dan Pandega berbordir Warna Kuning'
      ]
    },
    {
      name: 'Pemasangan TKK',
      description:
        'TKK dipasang di lengan sebelah kanan baju seragam, dengan dua pilihan pemasangan',
      groupType: 'array',
      groups: [
        'Melintang, dua jari di bawah lambang Kwartir Daerah/di atas jahitan bawah lengan, atau',
        'Melingkari lambang Kwartir Daerah dengan komposisi dua buah di sebelah kanan lambang Kwartir Daerah, dua buah di sebelah kiri lambang Kwartir Daerah, dan satu buah di bawah lambang Kwartir Daerah.'
      ]
    }
  ]
}

export default data
