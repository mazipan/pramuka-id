export interface TriSatyaOrigin {
  preface: string
  data: string[]
}
export interface TriSatyaMeaningShort {
  short: string
}
export interface TriSatyaMeaning {
  refer: boolean
  preface: string
  data: TriSatyaMeaningShort[]
}
export interface TriSatyaData {
  origin: TriSatyaOrigin
  meanings: TriSatyaMeaning
}

export interface TriSatya {
  id: string
  title: string
  preface: string
  data: TriSatyaData
}

const data: TriSatya = {
  id: 'tri-satya',
  title: 'Tri Satya',
  preface:
    'Pengertian dari Tri Satya adalah Tri: tiga, Satya: Kesetiaan. Artinya adalah tiga kesetiaan yang harus di penuhi oleh atau dipatuhi oleh setiap anggota Pramuka.',
  data: {
    origin: {
      preface: 'Demi kehormatanku aku berjanji akan bersungguh-sungguh :',
      data: [
        'Menjalankan kewajibanku terhadap Tuhan, dan Negara Kesatuan Republik Indonesia dan menjalankan Pancasila.',
        'Menolong sesama hidup dan ikut serta membangun masyarakat.',
        'Menepati Dasa Darma.'
      ]
    },
    meanings: {
      refer: false,
      preface:
        'Adapun Tri Satya tersebut diatas mengandung arti bahwa seorang Pramuka berkewajiban sebagai berikut:',
      data: [
        {
          short:
            'Menjalankan kewajiban/Perintah Tuhan, serta menjauhi segala apa yang menjadi larangan-Nya.'
        },
        {
          short: 'Kewajiban terhadap Negara Kesatuan Republik Indonesia.'
        },
        {
          short:
            'Kewajiban terhadap Pancasila, yaitu dengan cara menghayati dan mengamalkan isinya.'
        },
        {
          short: 'Kewajiban terhadap sesama masyarakat.'
        },
        {
          short: 'Kewajiban menghayati dan mengamalkan Dasa Dharma'
        }
      ]
    }
  }
}

export default data
