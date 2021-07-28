export interface KompasData {
  heading: string
  paragraph: string[]
}
export interface KompasDataList extends KompasData {
  list: string[]
}

export interface KompasTable {
  th: string[]
  td: string[][]
}

export interface KompasCaraKerja {
  heading: string
  image: string
  paragraph: string[]
  table: KompasTable
}

export interface KompasBagian {
  heading: string
  image: string
  list: string[]
}

export interface KompasJenisList {
  title: string
  image: string
  desc: string
}
export interface KompasJenis {
  heading: string
  list: KompasJenisList[]
}
export interface Kompas {
  source: string[]
  title: string
  id: string
  dataIntro: KompasData[]
  dataFungsi: KompasDataList
  dataCarKer: KompasCaraKerja
  dataBagian: KompasBagian
  dataCara: KompasDataList
  dataJenis: KompasJenis
}

const data: Kompas = {
  source: ['https://id.wikipedia.org/wiki/Kompas', 'https://rimbakita.com/kompas/'],
  title: 'Materi Kecakapan Umum',
  id: 'kompas',
  dataIntro: [
    {
      heading: 'Pengertian Kompas',
      paragraph: [
        'Kompas adalah alat penunjuk arah mata angin. Alat ini menggunakan medan magnet bumi untuk menentukan arah utara, selatan, timur dan barat.'
      ]
    },
    {
      heading: 'Sejarah & Penemu Kompas',
      paragraph: [
        'Kompas magnetik pertama kali ditemukan dan digunakan sebagai alat untuk meramal pada tahun 200 SM atau awal Dinasti Han Tiongkok. Kemudian teknologi magnetik ini diadopsi oleh Dinasti Song pada abad ke-11.',
        'Sedangkan, orang-orang Eropa tercatat mulai menggunakan kompas berawal di daerah Eropa Barat dan Persia pada awal abad ke-13.',
        'Penemuan jarum magnetik yang selalu mengarah ke utara dan selatan juga dijelaskan pada buku Loven Heng. Pada abad ke-9, orang Tiongkok mengembangkan kompas menjadi dua jenis, yaitu jarum yang mengambang dan jarum yang berputar.',
        'Penyebaran kompas pertama kali dilakukan oleh seorang pelaut Persia ketika mendapatkan kompas dari orang Tiongkok. Akan tetapi, barulah pada tahun 1877 kompas dari seorang Inggris bernama William Thomson “1st Baron Kelvin (Lord Kelvin)” yang dapat diterima oleh semua negara. Sebab, kompas tersebut telah mengalami perbaikan dari kesalahan-kesalahan akibat deviasi karena penggunaan material besi yang meningkat untuk membangun kapal'
      ]
    }
  ],
  dataFungsi: {
    heading: 'Fungsi dan Manfaat',
    paragraph: [
      'Fungsi dan manfaat utama dari kompas adalah untuk menentukan arah mata angin, terutama arah utara dan selatan yang menjadi tempat medan magnetis bumi. Selain itu, kompas juga berguna untuk:'
    ],
    list: [
      'Mengukur besar sudut kompas',
      'Mengukur besar sudut peta',
      'Menentukan letak orientasi',
      'Mempermudah perhitungan dan pembacaan peta'
    ]
  },
  dataCarKer: {
    heading: 'Cara Kerja Kompas',
    image: 'https://rimbakita.com/wp-content/uploads/2019/07/mata-angin.png',
    paragraph: [
      'Prinsip kerja kompas adalah adanya gaya tarik menarik antara magnet pada jarum kompas dengan kutub magnet bumi. Jarum kompas yang terbuat dari magnet memiliki kutub utara dan selatan dan akan selalu menunjuk arah utara dan selatan.'
    ],
    table: {
      th: ['No.', 'Simbol', 'Keterangan', 'Derajat'],
      td: [
        ['1', 'U', 'Utara', '0 / 360'],
        ['2', 'UTL', 'Utara Timur Laut', '22.5'],
        ['3', 'TL', 'Timur Laut', '45'],
        ['4', 'TTL', 'Timur Timur Laut', '67.5'],
        ['5', 'T', 'Tenggara', '90'],
        ['6', 'TM', 'Timur Menenggara', '112.5'],
        ['7', 'TG', 'Tenggara', '135'],
        ['8', 'SM', 'Selatan Menenggara', '157.5'],
        ['9', 'S', 'Selatan', '180'],
        ['10', 'SBD', 'Selatan Barat Daya', '202.5'],
        ['11', 'BD', 'Barat Daya', '225'],
        ['12', 'BBD', 'Barat Barat Daya', '247.5'],
        ['13', 'B', 'Barat', '270'],
        ['14', 'BBL', 'Barat Barat Laut', '292.5'],
        ['15', 'BL', 'Barat Laut', '315'],
        ['16', 'UBL', 'Utara Barat Laut', '337.5']
      ]
    }
  },
  dataBagian: {
    heading: 'Bagian Kompas',
    image: 'https://rimbakita.com/wp-content/uploads/2019/07/komponen-kompas.jpg',
    list: [
      'Dial : Bagian permukaan yang tertera angka atau huruf seperti jam',
      'Visir : Pembidik Sasaran',
      'Kaca Pembesar : Untuk melihat sasaran dan angka pada Dial agar lebih jelas',
      'Jam Penunjuk : Menunjukkan lokasi magnet bumi',
      'Tutup Dial : Mempunyai 2 garis bersudut 450 dan dapat diputar',
      'Alat penggantung : Tempat mengaitkan tali dan dapat juga untuk menyangkutkan ibu jari ketika melakukan pembidikan'
    ]
  },
  dataCara: {
    heading: 'Cara Menggunakan Kompas Bidik',
    paragraph: [
      'Berikut ini adalah panduan menggunakan kompas agar mendapat arah yang akurat, yaitu:'
    ],
    list: [
      'Letakkan kompas diatas permukaan datar',
      'Tunggu jarum jarum kompas tidak bergerak dan menunjukkan arah utara dan selatan',
      'Bidik sasaran dengan menggunakan visir, melalui celah pada kaca pembesar, setelah itu miringkan kaca pembesar sekitar 50° dengan kaca dial',
      'Apabila penglihatan visir diragukan karena kurang jelas terlihat dari kaca pembesar, luruskan garis pada tutup dial ke arah visir, searah dengan sasaran bidik agar mudah terlihat melalui kaca pembesar',
      'Apabila sasaran bidik 30°, maka bidiklah ke arah 30°. Sebelum menuju sasaran, tetapkan dahulu titik sasaran sepanjang jalur 30°. Cari benda yang menonjol atau tinggi diantara benda lain disekitarnya sebagai patokan untuk mencegah kehilangan jalur',
      'Sebelum bergerak menuju sasaran bidik, tetapkan pula Sasaran Balik (Back Azimuth atau Back Reading) agar kita dapat kembali ke tempat semula apabila tersesat'
    ]
  },
  dataJenis: {
    heading: 'Jenis - jenis Kompas',
    list: [
      {
        title: 'Kompas Biasa / Analog',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-magnetik.jpg',
        desc: 'Kompas ini adalah jenis yang paling umum digunakan karena harganya relatif murah. Kompas analog atau biasa ini berisi jarum magnet yang direndam dalam suatu cairan.'
      },
      {
        title: 'Kompas Bidik / Kompas Prisma',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-bidik.jpg',
        desc: 'Tipe kompas bidik biasanya digunakan oleh TNI, Tim SAR, Navigator dan pendaki gunung. Kompas ini mempunyai garis lembut dengan poros vertikal yang berfungsi untuk membidik sasaran dan menentukan derajat posisi sasaran.'
      },
      {
        title: 'Kompas Silva',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-silva.jpg',
        desc: 'Kompas silva adalah salah satu jenis kompas yang biasa dipakai dalam bidang topografi. Kompas ini mempunyai protektor datar yang berfungsi sebagai tempat pada peta topografi. Kompas ini digunakan untuk membantu navigasi di daratan.'
      },
      {
        title: 'Kompas Thumb',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-thumb.jpg',
        desc: 'Thumb Compass adalah jenis kompas yang mirip dengan kompas silva, hanya saja memiliki model yang berbeda. Kompas ini digunakan seperti cincin yang dipasang di ibu jari atau jempol.'
      },
      {
        title: 'Kompas Digital',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-digital.jpg',
        desc: 'Kompas digital memiliki tingkat akurasi yang baik, sebab penentuan arah telah menggunakan komputerasi dan data disajikan secara digital.'
      },
      {
        title: 'Kompas GPS / Satelit',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/gps-mobil.jpg',
        desc: 'Kompas jenis ini terintegrasi dengan satelit. Kompas GPS dapat digunakan pada area blank spot. Teknologi dalam menentukan arah ini telah diadopsi pada sistem GPS mobil yang dapat juga menampilkan pergerakan si pengguna.'
      },
      {
        title: 'Kompas Kiblat',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-kiblat.jpg',
        desc: 'Jenis kompas ini dimanfaatkan untuk menentukan arah dan posisi kiblat bagi umat muslim. Biasa digunakan ketika mengawali pembangunan mushola atau masjid.'
      },
      {
        title: 'Kompas Nahkoda',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-nahkoda.jpg',
        desc: 'Kompas nahkoda merupakan kompas yang digunakan di bidang pelayaran. Kompas ini sangat presisi dan tahan terhadap goncangan ketika terkena ombak besar.'
      },
      {
        title: 'Kompas Solid State',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-solid-state.jpg',
        desc: 'Teknologi ini merupakan jenis kompas yang tertanam di smartphone kita. Solid State Compass adalah perangkat keras yang juga disematkan pada beberapa benda lain, seperti jam tangan, serta gadget lain yang memiliki fitur kompas.'
      },
      {
        title: 'Kompas Astronomi',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-astronomi.jpg',
        desc: 'Kompas ini diandalkan bagi para pegiat di bidang astronomi atau orang-orang yang tengah menjalajahi daerah kutub. Jenis kompas ini sangat akurat dan memiliki fitur letak geografis bujur dan lintang.'
      },
      {
        title: 'Kompas Gyro',
        image:
          'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1080/https://rimbakita.com/wp-content/uploads/2019/07/kompas-gyro.jpg',
        desc: 'Kompas Gyro adalah sistem kompas yang mampu mempertahankan orientasi dengan prinsip ketetapan momentum sudut sehingga tahan terhadap goncangan dan sangat presisi.'
      }
    ]
  }
}

export default data
