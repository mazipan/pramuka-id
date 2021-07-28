export interface HymnePramuka {
  id: string
  title: string
  data: {
    lyrics: string[]
    audio: string
  }
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
    audio: '/audio/hymne-pramuka.mp3'
  }
}

export default data
