export interface ProklamasiImage {
  alt: string
  src: string
}
export interface Proklamasi {
  data: string[]
  audio: string
  images: ProklamasiImage[]
}

const data: Proklamasi = {
  data: [
    'PROKLAMASI',
    'Kami bangsa Indonesia, dengan ini menjatakan Kemerdekaan Indonesia.',
    'Hal-hal jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan dengan tjara seksama dan dalam tempo jang sesingkat-singkatnja.',
    "Djakarta, hari 17 boelan 8 tahoen '05",
    'Atas nama bangsa Indonesia.',
    'Soekarno/Hatta.'
  ],
  audio: '/audio/proklamasi.mp3',
  images: [
    {
      alt: 'Soekarno membaca teks proklamasi',
      src: '/assets/proklamasi/proklamasi-bung-karno.jpg'
    },
    {
      alt: 'Teks proklamasi',
      src: '/assets/proklamasi/naskah-proklamasi.jpeg'
    }
  ]
}

export default data
