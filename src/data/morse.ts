export interface MorseImage {
  alt: string
  src: string
}
export interface MorseSection {
  title: string
  key: string
}
export interface MorseAlphabet {
  code: string
  text: string
}
export interface MorseNumeric {
  code: string
  text: number
}
export interface Morse {
  source: string
  images: MorseImage[]
  sections: MorseSection[]
  alphabet: MorseAlphabet[]
  number: MorseNumeric[]
  symbol: MorseAlphabet[]
}

const data: Morse = {
  source: 'https://id.wikipedia.org/wiki/Kode_Morse',
  images: [
    {
      alt: 'Kode morse internasional',
      src: '/assets/morse/morse-code.svg'
    }
  ],
  sections: [
    {
      title: 'Huruf',
      key: 'alphabet'
    },
    {
      title: 'Angka',
      key: 'number'
    },
    {
      title: 'Tanda Baca',
      key: 'symbol'
    }
  ],
  alphabet: [
    {
      code: '• –',
      text: 'A'
    },
    {
      code: '– • • •',
      text: 'B'
    },
    {
      code: '– • – •',
      text: 'C'
    },
    {
      code: '– • •',
      text: 'D'
    },
    {
      code: '•',
      text: 'E'
    },
    {
      code: '• • – •',
      text: 'F'
    },
    {
      code: '– – •',
      text: 'G'
    },
    {
      code: '• • • •',
      text: 'H'
    },
    {
      code: '• •',
      text: 'I'
    },
    {
      code: '• – – –',
      text: 'J'
    },
    {
      code: '– • –',
      text: 'K'
    },
    {
      code: '• – • •',
      text: 'L'
    },
    {
      code: '– –',
      text: 'M'
    },
    {
      code: '– •',
      text: 'N'
    },
    {
      code: '– – –',
      text: 'O'
    },
    {
      code: '• – – •',
      text: 'P'
    },
    {
      code: '– – • –',
      text: 'Q'
    },
    {
      code: '• – •',
      text: 'R'
    },
    {
      code: '• • •',
      text: 'S'
    },
    {
      code: '–',
      text: 'T'
    },
    {
      code: '• • –',
      text: 'U'
    },
    {
      code: '• • • –',
      text: 'V'
    },
    {
      code: '• – –',
      text: 'W'
    },
    {
      code: '– • • –',
      text: 'X'
    },
    {
      code: '– • – –',
      text: 'Y'
    },
    {
      code: '– – • •',
      text: 'Z'
    },
    {
      code: '– – – –',
      text: 'KH'
    }
  ],
  number: [
    {
      code: '• – – – –',
      text: 1
    },
    {
      code: '• • – – –',
      text: 2
    },
    {
      code: '• • • – –',
      text: 3
    },
    {
      code: '• • • • –',
      text: 4
    },
    {
      code: '• • • • •',
      text: 5
    },
    {
      code: '– • • • •',
      text: 6
    },
    {
      code: '– – • • •',
      text: 7
    },
    {
      code: '– – – • •',
      text: 8
    },
    {
      code: '– – – – •',
      text: 9
    },
    {
      code: '– – – – –',
      text: 0
    }
  ],
  symbol: [
    {
      code: '• – • – • –',
      text: '.'
    },
    {
      code: '– – • • – –',
      text: ','
    },
    {
      code: '– – – • • •',
      text: ':'
    },
    {
      code: '– • • • • –',
      text: '-'
    },
    {
      code: '– • • – •',
      text: '/'
    }
  ]
}
export interface MorseMemorizationKotch {
  name: string
  desc: string
}

export const morseMemorizationKoch: MorseMemorizationKotch = {
  name: 'Metode Koch',
  desc: 'Metode Koch adalah metode pembelajaran pengiriman kode morse dengan sistem gradual. Latihan dengan metode Koch dimulai dengan menggunakan dua huruf yang diulang terus menerus[3] (umumnya E dan T untuk alasan pembiasaan dengan interval). Setelah seseorang menguasai dua huruf ini dan dapat membaca maupun mengirimkannya dengan cepat, maka satu huruf ditambahkan, dan seterusnya hingga seseorang yang mempelajari kode morse dapat menguasai pembacaan maupun pengiriman kode melalui pembiasaan. '
}
export interface SubstituteDetail {
  code: string
  text: string
  substitute: string
}
export interface MorseMemorizationSubstitute {
  name: string
  desc: string
  details: SubstituteDetail[]
}

export const morseMemorizationSubstitute: MorseMemorizationSubstitute = {
  name: 'Metode Substitusi',
  desc: 'Metode ini umum digunakan di kepramukaan Indonesia, yaitu dengan membuat padanan kata yang berawal dari alfabet latin, dan setiap O mewakili garis ( - ), dan setiap huruf vokal lain mewakili titik (.) ',
  details: [
    {
      code: '• –',
      text: 'A',
      substitute: 'Ano'
    },
    {
      code: '– • • •',
      text: 'B',
      substitute: 'Bonaparte'
    },
    {
      code: '– • – •',
      text: 'C',
      substitute: 'Coba - coba'
    },
    {
      code: '– • •',
      text: 'D',
      substitute: 'Dominan'
    },
    {
      code: '•',
      text: 'E',
      substitute: 'Egg'
    },
    {
      code: '• • – •',
      text: 'F',
      substitute: 'Father Joe'
    },
    {
      code: '– – •',
      text: 'G',
      substitute: 'Golongan'
    },
    {
      code: '• • • •',
      text: 'H',
      substitute: 'Himalaya'
    },
    {
      code: '• •',
      text: 'I',
      substitute: 'Islam'
    },
    {
      code: '• – – –',
      text: 'J',
      substitute: 'Jago Loro'
    },
    {
      code: '– • –',
      text: 'K',
      substitute: 'Komando'
    },
    {
      code: '• – • •',
      text: 'L',
      substitute: 'Lemonade'
    },
    {
      code: '– –',
      text: 'M',
      substitute: 'Motor'
    },
    {
      code: '– •',
      text: 'N',
      substitute: 'Notes'
    },
    {
      code: '– – –',
      text: 'O',
      substitute: 'Omoto'
    },
    {
      code: '• – – •',
      text: 'P',
      substitute: 'Pertolongan'
    },
    {
      code: '– – • –',
      text: 'Q',
      substitute: 'Qomokaro'
    },
    {
      code: '• – •',
      text: 'R',
      substitute: 'Rasove'
    },
    {
      code: '• • •',
      text: 'S',
      substitute: 'Sahara'
    },
    {
      code: '–',
      text: 'T',
      substitute: 'Ton'
    },
    {
      code: '• • –',
      text: 'U',
      substitute: 'Unesco'
    },
    {
      code: '• • • –',
      text: 'V',
      substitute: 'Versikaro'
    },
    {
      code: '• – –',
      text: 'W',
      substitute: 'Winoto'
    },
    {
      code: '– • • –',
      text: 'X',
      substitute: 'Xosendero'
    },
    {
      code: '– • – –',
      text: 'Y',
      substitute: 'Yosimoto'
    },
    {
      code: '– – • •',
      text: 'Z',
      substitute: 'Zoroaster'
    }
  ]
}

export interface GroupChild {
  origin: string
  target: string
}

export interface GroupDetail {
  title: string
  children: GroupChild[]
}
export interface MorseMemorizationGroup {
  name: string
  desc: string
  details: GroupDetail[]
}

export const morseMemorizationGroup: MorseMemorizationGroup = {
  name: 'Metode Pengelompokan',
  desc: 'Metode yang mengelompokkan huruf-huruf berdasarkan bagaimana huruf ini diwakili oleh kode morsenya. Pengelompokan tersebut antara lain Alphabet dengan kode morse yang berkebalikan antara titik dan garis, misalnya huruf K yang diwakili oleh -.- berkebalikan dengan huruf R yang diwakili oleh .-. dan alfabet dengan kode morse berlawanan. Misalnya, huruf A yang diwakili oleh .- dan huruf N yang diwakili oleh -. ',
  details: [
    {
      title: 'Alfabet dengan kode morse yang berkebalikan',
      children: [
        {
          origin: 'E',
          target: 'T'
        },
        {
          origin: 'I',
          target: 'M'
        },
        {
          origin: 'S',
          target: 'O'
        },
        {
          origin: 'H',
          target: 'KH'
        }
      ]
    },
    {
      title: 'Alfabet dengan kode morse yang berkebalikan',
      children: [
        {
          origin: 'K',
          target: 'R'
        },
        {
          origin: 'X',
          target: 'P'
        }
      ]
    },
    {
      title: 'Alphabet dengan kode morse yang berlawanan',
      children: [
        {
          origin: 'A',
          target: 'N'
        },
        {
          origin: 'U',
          target: 'D'
        },
        {
          origin: 'V',
          target: 'B'
        }
      ]
    },
    {
      title: 'Alphabet dengan kode morse yang berlawanan',
      children: [
        {
          origin: 'W',
          target: 'G'
        },
        {
          origin: 'F',
          target: 'L'
        },
        {
          origin: 'Y',
          target: 'Q'
        }
      ]
    },
    {
      title: 'Tidak memiliki pasangan',
      children: [
        {
          origin: 'C',
          target: ''
        },
        {
          origin: 'J',
          target: ''
        },
        {
          origin: 'Z',
          target: ''
        }
      ]
    }
  ]
}

export default data
