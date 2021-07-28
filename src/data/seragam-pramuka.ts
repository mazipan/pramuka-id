export interface SeragamPramukaContentName {
  name: string
}

export interface SeragamPramukaContentList {
  name: string
  lists: string[]
}

export interface SeragamPramukaSection {
  type: string
  content: string | SeragamPramukaContentName[] | SeragamPramukaContentList[]
}

export interface SeragamPramukaData {
  title: string
  section: SeragamPramukaSection[]
}
export interface SeragamPramuka {
  title: string
  subtitle: string
  description: string
  source: string
  data: SeragamPramukaData[]
}

const data: SeragamPramuka = {
  title: 'Materi Pramuka',
  subtitle: 'Seragam Pramuka',
  description: 'Pakaian Seragam Pramuka',
  source: 'https://www.pramukaindonesia.com/search/label/Seragam%20Pramuka?m=1',
  data: [
    {
      title: 'Jenis Jenis Seragam Pramuka',
      section: [
        {
          type: 'p',
          content:
            'Seragam Pramuka adalah pakaian yang digunakan oleh semua anggota Gerakan Pramuka Indonesia yang berfungsi sebagai sarana pendidikan dan identitas bagi anggotanya guna meningkatkan citra Gerakan Pramuka. Sedangkan tujuan penggunaan Seragam Pramuka adalah agar anggota Pramuka yang mengenakannya dapat berahlak sesuai Satya dan Darma Pramuka, memiliki jiwa korsa dan berdisiplin.'
        },
        {
          type: 'p',
          content:
            'Warna seragam Pramuka adalah coklat muda dan coklat tua. Warna tersebut dipilih karena merupakan salah satu warna yang digunakan para pejuang Indonesia ketika masa perang kemerdekaan.'
        },
        {
          type: 'img',
          content: '/assets/seragam-pramuka/jenis-seragam-pramuka.jpg'
        },
        {
          type: 'h4',
          content: 'Jenis-Jenis Seragam Pramuka'
        },
        {
          type: 'list',
          content: [
            {
              name: 'Seragam harian : Pakaian yang dikenakan ketika anggota Gerakan Pramuka melakukan kegiatan kepramukaan harian. Namun Pakaian Seragam Harian dapat juga dikenakan pada waktu mengikuti upacara dan melakukan kegiatan kepramukaan lainnya. Pakaian ini bisa disebut pakaian utama seorang Pramuka. Setiap anggota Pramuka wajib memiliki minimal satu stel Pakaian Seragam harian. Baca juga : Seragam Harian Pembinan Pramuka'
            },
            {
              name: 'Seragam kegiatan : Pakaian yang dikenakan ketika anggota Gerakan Pramuka melakukan kegiatan di lapangan atau kegiatan olah raga. Alasan penggunaan pakaian ini adalah agar lebih mudah ketika melakukan aktivitas yang diperlukan. Anggota Gerakan Pramuka tidak harus memiliki seragam jenis ini. Namun sangat direkomendasikan untuk memilikinya.'
            },
            {
              name: 'Seragam Upacara : Pakaian yang dikenakan ketika anggota Gerakan Pramuka mengikuti Upacara Hari Proklamasi Kemerdekaan, Upacara Hari Pramuka, Upacara Pelantikan Pengurus/Mabi, Upacara Pembukaan dan Penutupan Kegiatan Nasional, ketika menghadiri upacara lain dimana TNI mengenakan Seragam PDU IV dan acara resmi kepramukaan di luar negeri. Pakaian seragam ini tidak dapat dikenakan oleh semua anggota Gerakan Pramuka. Yang boleh mengenakannya hanyalah Andalan dan Majelis Pembimbing mulai dari tingkat Kwartir Cabang sampai Kwartir Nasional.'
            },
            {
              name: 'Seragam khusus : Pakaian yang dikenakan karena pertimbangan khusus. Seragam khusus terdiri atas Pakaian Seragam Muslim dan Pakaian Seragam Tambahan.'
            },
            {
              name: 'Seragam Muslim : Pakaian yang dikenakan karena pertimbangan agama Islam. Hal ini untuk mengakomodir anggota muslim terutama putri untuk dapat mengenakan jilbab tanpa melanggar aturan.'
            },
            {
              name: 'Seragam tambahan : Pakaian yang bersifat situasional dan dapat dikenakan oleh seluruh anggota Gerakan Pramuka.'
            }
          ]
        },
        {
          type: 'h4',
          content: 'Kelengkapan Jenis Seragam Pramuka'
        },
        {
          type: 'p',
          content:
            'Setiap Pakaian Seragam Pramuka memiliki kelengkapan-kelengkapan yang terdiri atas:'
        },
        {
          type: 'list',
          content: [
            { name: 'Tutup Kepala' },
            { name: 'Baju Pramuka' },
            { name: 'Rok atau Celana' },
            { name: 'Setangan Leher' },
            { name: 'Ikat pinggang' },
            { name: 'Kaus kaki' },
            { name: 'Sepatu' },
            { name: 'Tanda Pengenal Gerakan Pramuka' }
          ]
        }
      ]
    },
    {
      title: 'Pakaian Seragam Pembina Pramuka Harian',
      section: [
        {
          type: 'p',
          content:
            'Pakaian Seragam Pembina Pramuka Harian - Pada tulisan kami ini blog Materi Pramuka Indonesia akan berbagi model Pakaian Seragam Pramuka Untuk Pembina/Mabi baik Putra maupun pembinan Putri.'
        },
        {
          type: 'h4',
          content: 'Pakaian Seragam Harian Pramuka Untuk Pembina Putra'
        },
        {
          type: 'list',
          content: [
            {
              name: 'Tutup Kepala:',
              lists: [
                'dibuat dari bahan warna hitam polos.',
                'berbentuk peci nasional. (dapat menggunakan baret dalam upacara yang melibatkan peserta didik sesuai ketentuan penyelenggara kegiatan)'
              ]
            },
            {
              name: 'Baju:',
              lists: [
                'dibuat dari bahan warna coklat muda.',
                'lengan pendek.',
                'memakai lidah bahu lebar 3 cm.',
                'kerah model kerah dasi.',
                'kancing baju di depan berwarna sama dengan bajunya.',
                'memakai dua saku tempel di dada kanan dan kiri dengan lipatan luar selebar 2 cm di tengah saku dan diberi tutup bergelombang.',
                'dimasukkan ke dalam celana.'
              ]
            },
            {
              name: 'Celana:',
              lists: [
                'dibuat dari bahan warna coklat tua.',
                'berbentuk celana panjang.',
                'memakai ban pinggang dan tempat ikat pinggang (brattle) selebar 1 cm.',
                'memakai saku dalam di samping kanan dan kiri.',
                'memakai saku dalam di bagian belakang kanan dan kiri diberi tutup.',
                'memakai ritsleting di bagian depan.',
                'memakai ikat pinggang berwarna hitam.'
              ]
            },
            {
              name: 'Setangan Leher:',
              lists: [
                'dibuat dari bahan warna merah dan putih.',
                'berbentuk segitiga sama kaki; sisi panjang 120-130 cm dengan sudut bawah 90º(panjang disesuaikan dengan tinggi badan pemakai sampai di pinggang).bahan dasar warna putih dengan lis warna merah selebar 5 cm.',
                'setangan leher dilipat sedemikian rupa (lebar lipatan ± 5 cm) sehingga warna merah putih tampak dengan jelas, dan pemakaiannya tampak rapi.',
                'dikenakan dengan cincin (ring) setangan leher.',
                'dikenakan di bawah kerah baju.'
              ]
            },
            {
              name: 'Kaos Kaki:',
              lists: ['panjang kaos kaki sampai betis.', 'warna hitam.']
            },
            {
              name: 'Sepatu:',
              lists: ['model tertutup.', 'warna hitam.']
            },
            {
              name: 'Tanda Pengenal terdiri dari:',
              lists: [
                'tanda topi dikenakan di peci bagian samping kiri depan.papan nama dikenakan di baju bagian depan kanan di atas saku.'
              ]
            }
          ]
        },
        {
          type: 'h4',
          content:
            'Contoh Pakaian Seragam Harian Pembina Pramuka, Andalan, dan Majelis Pembimbing Putra.'
        },
        {
          type: 'img',
          content: '/assets/seragam-pramuka/seragam-pembina-pramuka-putra.jpg'
        },
        {
          type: 'h4',
          content: 'Pakaian Seragam Harian Pramuka Untuk Pembina Putri'
        },
        {
          type: 'list',
          content: [
            {
              name: 'Tutup Kepala:',
              lists: [
                'dibuat dari bahan warna coklat tua.',
                'berbentuk peci.',
                'tinggi bagian depan 7 cm, pada bagian belakang dibuat melengkung, dengan bukaan di bagian belakang selebar 8 cm (diberi elastik hitam supaya stabil),',
                'bagian samping kiri depan diberi lipatan lengkung dengan panjang dasar 10 cm.',
                'panjang topi 25–27 cm (disesuaikan dengan ukuran kepala masing-masing).'
              ]
            },
            {
              name: 'Baju:',
              lists: [
                'dibuat dari bahan warna coklat muda.',
                'lengan pendek.',
                'model prinses pada bagian depan dan belakang.',
                'memakai lidah bahu selebar 3 cm.',
                'kerah model kerah dasi.',
                'dua saku dalam di bagian depan bawah kanan dan kiri mulai dari garis potongan prinses ke jahitan samping, dengan tinggi saku 14-15 cm.',
                'tanpa ban pinggang.',
                'panjang sampai garis pinggul, dikenakan di luar rok.'
              ]
            },
            {
              name: 'Rok:',
              lists: [
                'dibuat dari bahan warna coklat tua.',
                'bagian bawah melebar (model “A“).',
                'dengan lipatan tertutup (splitplooi) di bagian belakang.',
                'memakai saku dalam di samping kanan dan kiri.',
                'panjang rok 10 cm di bawah lutut.'
              ]
            },
            {
              name: 'Setangan Leher:',
              lists: [
                'dibuat dari bahan warna merah dan putih. berbentuk segitiga sama kaki; sisi panjang 120-130 cm dengan sudut bawah 90º(panjang disesuaikan dengan tinggi badan pemakai sampai di pinggang).',
                'bahan dasar warna putih dengan lis warna merah selebar 5 cm.',
                'setangan leher dilipat sedemikian rupa (lebar lipatan ± 5 cm) sehingga warna merah putih tampak dengan jelas, dan pemakaiannya tampak rapi.',
                'dikenakan dengan cincin (ring) setangan leher.',
                'dikenakan di bawah kerah baju.'
              ]
            },
            {
              name: 'Sepatu:',
              lists: ['model tertutup.', 'warna hitam.']
            },
            {
              name: 'Tanda Pengenal terdiri dari:',
              lists: [
                'tanda topi dikenakan di samping kiri depan di tempat lipatan topi.',
                'papan nama dikenakan di baju bagian depan kanan atas.'
              ]
            }
          ]
        },
        {
          type: 'h4',
          content: 'Contoh Pakaian Seragam Harian Pembina Pramuka Putri'
        },
        {
          type: 'img',
          content: '/assets/seragam-pramuka/seragam-pembina-pramuka-putri.jpg'
        }
      ]
    }
  ]
}

export default data
