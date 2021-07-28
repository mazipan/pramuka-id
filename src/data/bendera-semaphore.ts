export interface SemaphoreSection {
  title: string
  key: string
}
export interface SemaphoreImgSection {
  img: string
  text: string
}

export interface SemaphoreUrlSection {
  url: string
  text: string
}

export interface Semaphore {
  source: string
  description: string
  semaphoreImg: string
  sections: SemaphoreSection[]
  alphabet: SemaphoreImgSection[]
  number: SemaphoreImgSection[]
  other: SemaphoreImgSection[]
  reference: SemaphoreUrlSection[]
}

const data: Semaphore = {
  source: 'https://en.wikipedia.org/wiki/Flag_semaphore',
  description: `Semaphore adalah cara mengirimkan berita dengan mempergunakan sepasang bendera. Bendera yang digunakan ukuran 45 x 45 cm dua buah, Warna (kanan dan kiri) merah-kuning (bersilang). Bendera diikatkan pada tongkat yang panjangnya 50-55 cm.`,
  semaphoreImg: '/assets/bendera-semaphore/ukuran.png',
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
      title: 'Aba-aba',
      key: 'other'
    }
  ],
  alphabet: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Semaphore_Alpha.svg',
      text: 'A'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Semaphore_Bravo.svg',
      text: 'B'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Semaphore_Charlie.svg',
      text: 'C'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Semaphore_Delta.svg',
      text: 'D'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Semaphore_Echo.svg',
      text: 'E'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Semaphore_Foxtrot.svg',
      text: 'F'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Semaphore_Golf.svg',
      text: 'G'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Semaphore_Hotel.svg',
      text: 'H'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Semaphore_India.svg',
      text: 'I'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Semaphore_Juliet.svg',
      text: 'J'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Semaphore_Kilo.svg',
      text: 'K'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Semaphore_Lima.svg',
      text: 'L'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Semaphore_Mike.svg',
      text: 'M'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Semaphore_November.svg',
      text: 'N'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Semaphore_Oscar.svg',
      text: 'O'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Semaphore_Papa.svg',
      text: 'P'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Semaphore_Quebec.svg',
      text: 'Q'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Semaphore_Romeo.svg',
      text: 'R'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Semaphore_Sierra.svg',
      text: 'S'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Semaphore_Tango.svg',
      text: 'T'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Semaphore_Uniform.svg',
      text: 'U'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Semaphore_Victor.svg',
      text: 'V'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Semaphore_Whiskey.svg',
      text: 'W'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Semaphore_X-ray.svg',
      text: 'X'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Semaphore_Yankee.svg',
      text: 'Y'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Semaphore_Zulu.svg',
      text: 'Z'
    }
  ],
  number: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Semaphore_Alpha.svg',
      text: '1'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Semaphore_Bravo.svg',
      text: '2'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Semaphore_Charlie.svg',
      text: '3'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Semaphore_Delta.svg',
      text: '4'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Semaphore_Echo.svg',
      text: '5'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Semaphore_Foxtrot.svg',
      text: '6'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Semaphore_Golf.svg',
      text: '7'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Semaphore_Hotel.svg',
      text: '8'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Semaphore_India.svg',
      text: '9'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Semaphore_Kilo.svg',
      text: '0'
    }
  ],
  other: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Semaphore_Ready.svg',
      text: 'Siap/Istirahat'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Semaphore_Error.svg',
      text: 'Kesalahan/Perhatian'
    }
  ],
  reference: [
    {
      text: 'Belajar Semaphore Cara Mudah Cepat',
      url: 'https://www.pramukaria.id/2013/06/belajar-semaphore-cara-mudah-cepat.html'
    },
    {
      text: 'Semafor bendera - Wikipedia',
      url: 'https://id.wikipedia.org/wiki/Semafor_bendera'
    }
  ]
}

export default data
