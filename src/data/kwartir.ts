export interface KwartirItem {
  img: string
  text: string
}

export interface KwartirSection {
  title: string
  key: string
}
export interface KwartirReference {
  text: string
  url: string
}
export interface Kwartir {
  source: string
  description: string
  semaphoreImg: string
  sections: KwartirSection[]
  sumatera: KwartirItem[]
  jawa: KwartirItem[]
  kalimantan: KwartirItem[]
  bali_nusa: KwartirItem[]
  sulawesi: KwartirItem[]
  maluku_papua: KwartirItem[]
  reference: KwartirReference[]
}

const data: Kwartir = {
  source: 'https://id.m.wikipedia.org/wiki/Gerakan_Pramuka_Indonesia',

  description: `Kwartir adalah suatu badan pengelola Gerakan Pramuka yang mempunyai tugas pokok pembinaan kepada Kwartir, Satuan, dan Gugu depan dalam
    pengembangan Gerakan Pramuka untuk mencapai tujuannya. Kwartir dalam istilah kepramukaan merujuk pada satuan organisasi yang mengelola Gerak Pramuka yang
    dipimpin secara kolektif oleh para andalan (istilah untuk pengurus kwartir). Kwartir memiliki tingkatan yang disesuaikan dengan tingkat/ wilayah pemerintahan
    dari pusat sampai daerah.
  `,
  semaphoreImg: '/assets/bendera-semaphore/ukuran.png',
  sections: [
    {
      title: 'Sumatera',
      key: 'sumatera'
    },
    {
      title: 'Jawa',
      key: 'jawa'
    },
    {
      title: 'Kalimantan',
      key: 'kalimantan'
    },
    {
      title: 'Bali dan Nusa Tenggara',
      key: 'bali_nusa'
    },
    {
      title: 'Sulawesi',
      key: 'sulawesi'
    },
    {
      title: 'Kepulauan Maluku dan Papua',
      key: 'maluku_papua'
    }
  ],
  sumatera: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/6/62/1_aceh_copy.png',
      text: 'Aceh'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Pramuka%2C_Lencana_Daerah_Sumatera_Utara.svg',
      text: 'Sumatera Utara'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Pramuka%2C_Lencana_Daerah_Sumatera_Barat.svg',
      text: 'Sumatera Barat'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/8/84/LOGO_KWARDA_BENGKULU.png',
      text: 'Bengkulu'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/3/3e/Pramuka_Riau.png',
      text: 'Riau'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/c/c6/Pramuka_Riau_Kepulauan.jpg',
      text: 'Kepulauan Riau'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Pramuka%2C_Lencana_Daerah_Jambi.svg',
      text: 'Jambi'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/a/ab/Pramuka_Sumatera_Selatan.png',
      text: 'Sumatera Selatan'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/f/f4/Pramuka_Lampung.png',
      text: 'Lampung'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/a/a9/Pramuka_Bangka_belitung.png',
      text: 'Bangka Belitung'
    }
  ],
  jawa: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/0/04/Pramuka_Jakarta.png',
      text: 'Jakarta'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/9/94/Pramuka_Jawa_Barat.png',
      text: 'Jawa Barat'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/f/f0/Pramuka_Banten.jpeg',
      text: 'Banten'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/2/21/Pramuka_Jawa_Tengah.png',
      text: 'Jawa Tengah'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/b/b6/Pramuka_Jawa_Timur.png',
      text: 'Jawa Timur'
    }
  ],
  kalimantan: [
    // {
    //   img: 'https://upload.wikimedia.org/wikipedia/id/2/28/Pramuka_Kalimantan_Barat.jpg',
    //   text: 'Kalimantan Barat'
    // },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/f/f1/Pramuka_Kalimantan_Tengah.png',
      text: 'Kalimantan Tengah'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/6/6a/Pramuka_Kalimantan_Selatan.jpg',
      text: 'Kalimantan Selatan'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Pramuka%2C_Lencana_Daerah_Kalimantan_Timur.svg',
      text: 'Kalimantan Timur'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Lambang_Kwartir_Daerah_Gerakan_Pramuka_Kalimantan_Utara.png',
      text: 'Kalimantan Utara'
    }
  ],
  bali_nusa: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/3/38/Pramuka_Bali.png',
      text: 'Bali'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/b/ba/Pramuka_Nusa_Tenggara_Barat.png',
      text: 'Nusa Tenggara Barat'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/f/f7/Pramuka_Nusa_Tenggara_Timur.png',
      text: 'Nusa Tenggara Timur'
    }
  ],
  sulawesi: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/b/b8/Pramuka_Sulawesi_Barat.jpg',
      text: 'Sulawesi Barat'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/9/9e/Pramuka_Sulawesi_Utara.jpg',
      text: 'Sulawesi Utara'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/b/b6/Pramuka_Sulawesi_Tengah.png',
      text: 'Sulawesi Tengah'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/8/86/Pramuka_Sulawesi_Selatan.png',
      text: 'Sulawesi Selatan'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/4/4e/Pramuka_Sulawesi_Tenggara.png',
      text: 'Sulawesi Tenggara'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/8/86/Pramuka_Gorontalo.jpg',
      text: 'Gorontalo'
    }
  ],
  maluku_papua: [
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/b/b1/Pramuka_Maluku.jpg',
      text: 'Maluku'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/3/3b/Pramuka_Maluku_Utara.jpg',
      text: 'Maluku Utara'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/7/72/Pramuka_Papua.jpg',
      text: 'Papua'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/id/9/99/Pramuka_Papua_Barat.jpg',
      text: 'Papua Barat'
    }
  ],
  reference: [
    {
      text: 'Kwartir di Indonesia',
      url: 'https://id.m.wikipedia.org/wiki/Gerakan_Pramuka_Indonesia#Lencana_Kwartir_Daerah_(sekarang)'
    }
  ]
}

export default data
