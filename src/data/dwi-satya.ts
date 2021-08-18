export interface DwiSatyaOrigin {
  preface: string
  data: string[]
}
export interface DwiSatyaData {
  origin: DwiSatyaOrigin
}
export interface DwiSatya {
  id: string
  title: string
  preface: string
  data: DwiSatyaData
}

const data: DwiSatya = {
  id: 'dwi-satya',
  title: 'Dwi Satya',
  preface:
    'Pengertian dari Dwi Satya adalah Dwi: dua, Satya: Kesetiaan. Artinya adalah dua kesetiaan yang harus di penuhi oleh atau dipatuhi oleh setiap anggota Pramuka Siaga.',
  data: {
    origin: {
      preface: 'Demi kehormatanku aku berjanji akan bersungguh-sungguh :',
      data: [
        'Menjalankan kewajibanku terhadap Tuhan, Negara Kesatuan Republik Indonesia, dan mengikuti aturan keluarga.',
        'Setiap hari berbuat kebaikan.'
      ]
    }
  }
}

export default data
