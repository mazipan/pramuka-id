export interface DwiDharmaOrigin {
  preface: string
  data: string[]
}
export interface DwiDharmaData {
  origin: DwiDharmaOrigin
}
export interface DwiDharma {
  id: string
  title: string
  preface: string
  data: DwiDharmaData
}

const data: DwiDharma = {
  id: 'dwi-dharma',
  title: 'Dwi Dharma',
  preface:
    'Pengertian Dwi Dharma adalah Dwi: dua, Dharma: Perbuatan baik (kebajikan). Dwi Dharma adalah dua Kebajikan yang menjadi pedoman bagi Pramuka Siaga dalam bertingkah laku sehari-hari.',
  data: {
    origin: {
      preface: '',
      data: ['Siaga berbakti kepada ayah dan ibundanya', 'Siaga berani dan tidak putus asa']
    }
  }
}

export default data
