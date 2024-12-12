export interface HymnePramukaData {
  lyrics: string[]
  audio: string
}
export interface HymnePramuka {
  id: string
  title: string
  data: HymnePramukaData
}

const data: HymnePramuka = {
  id: 'hymne-pramuka',
  title: 'Hymne Pramuka',
  data: {
    lyrics: [
      'Kami Pramuka Indonesia, ',
      'Manusia Pancasila',
      'Satyaku, Kudharmakan',
      'Dharmaku, Kubaktikan',
      'Agar Jaya Indonesia, ',
      'Indonesia Tanah Airku',
      'Kami Jadi Pandumu'
    ],
    audio: 'https://github.com/mazipan/pramuka.online/raw/master/audio/hymne-pramuka.mp3'
  }
}

export default data
