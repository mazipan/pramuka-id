export interface PancasilaMeaning {
  preface: string
  data: string[]
}
export interface Pancasila {
  imageGaruda: string
  imageItem: string
  data: string[]
  meaning: PancasilaMeaning
}

const data: Pancasila = {
  imageGaruda: '/assets/pancasila/garuda.png',
  imageItem: '/assets/pancasila/[index].png',
  data: [
    'KETUHANAN YANG MAHA ESA ',
    'KEMANUSIAAN YANG ADIL DAN BERADAB',
    'PERSATUAN INDONESIA',
    'KERAKYATAN YANG DIPIMPIN OLEH HIKMAT KEBIJAKSANAAN DALAM PERMUSYAWARATAN PERWAKILAN',
    'KEADILAN SOSIAL BAGI SELURUH RAKYAT INDONESIA'
  ],
  meaning: {
    preface:
      'Pancasila adalah dasar Negara tercantum dalam Pembukaan UUD 1945 alinea ke-4 kemudian untuk memudahkan pengamalannya di dalam kegiatan sehari-hari ditetapkan Tap MPR No. II/MPR/1978 sebagai Pedoman Penghayatan dan Pengamalan Pancasila ( P-4) atau disebut juga Eka Prasetya Pancakarsa. Pancasila yang sering disebut Burung Garuda atau Burung Sakti Elang Rajawali tersebut dilukis dengan ciri-ciri sebagai berikut:',
    data: [
      '17 bulu sayap terbang, yang melambangkan tanggal 17',
      '8 helai bulu ekor, yang melambangkan bulan 8 (Agustus)',
      '45 helai bulu sisik pada batang leher, yang melambangkan tahun 1945.',
      'Kombinasi dari ketiganya melambangkan hari Proklamasi Kemerdekaan Republik Indonesia.'
    ]
  }
}

export default data
