export interface SalamPramukaVariant {
  key: string
  emoji: string
  title: string
  meaning: string
  usage: string[]
}
export interface SalamPramukaCondition {
  title: string
  details: string[]
}
export interface SalamPramukaSteps {
  title: string
  conditions: SalamPramukaCondition[]
}
export interface SalamPramukaHow {
  key: string
  steps: SalamPramukaSteps[]
}
export interface SalamPramuka {
  meaning: string
  variant: SalamPramukaVariant[]
  howto: SalamPramukaHow[]
}

const data: SalamPramuka = {
  meaning:
    'Salam Pramuka adalah suatu perwujudan dari penghargaan terhdap orang lain atas dasar tata susila yang sesuai dengan kepribadian bangsa indonesia. Salam Pramuka merupakan tanda penghormatan untuk orang yang berbudi, siapa yang melihat dulu ia yang memberikan salam dahulu kepada orang akan di beri salam dan tidak memandang kepangkatannya dalam masyarakat. Salam Pramuka selain berarti sebagai penghormatan, juga berarti mengingatkan akan Tri Satya dan Pancasila kepada yang diberi salam, sehingga setiap anggota pramuka berkenan menyampaikan salam kepada semua Pembimbing dan Pembina serta kepada sesama Pramuka, juga kepada semua yang berhak menerimanya. Salam Pramuka juga merupakan Suara Perwujudan ikatan jiwa yang erat, maka didalam memberi atau menjawab Salam Pramuka harus dilaksanakan dengan tertib dan sempurna, sehingga tercermin semangat Pramuka yang Rajin, gembira dan penuh keikhlasan.',
  variant: [
    {
      key: 'salam-biasa',
      emoji: '👋',
      title: 'Salam Biasa',
      meaning: 'Salam biasa di sampaikan kepada:',
      usage: [
        'Semua Pramuka',
        'Orang Tua',
        'Guru',
        'Kakak Pembina/Pembimbing',
        'Sahabat/kawan',
        'Orang lain yang dianggap perlu menerima salam'
      ]
    },
    {
      key: 'salam-penghormatan',
      emoji: '👏',
      title: 'Salam Penghormatan',
      meaning:
        'Salam penghormatan merupakan suatu penhargaan yang mendalam yang disampaikan kepada:',
      usage: [
        'Pramuka Utama (Presiden RI)',
        'Bendera Sang Saka Merah Putih (dalam Upacara)',
        'Lagu Kebangsaan (dalam upacara resmi)',
        'Panji-panji Pramuka (dalam Upacara resmi)',
        'Menteri-menteri atau tamu agung Negara',
        'Jenazah (dalam Upacara pemakaman atau bertemu dijalan)'
      ]
    },
    {
      key: 'salam-janji',
      emoji: '🤞',
      title: 'Salam Janji',
      meaning:
        'Salam Janji adalah tanda penghormatan yang dilakukan setiap anggota Pramuka sewaktu mendengar Tri Satya sedang dibacakan.',
      usage: []
    }
  ],
  howto: [
    {
      key: 'salam-biasa',
      steps: [
        {
          title: 'Dalam Keadaan berhenti.',
          conditions: [
            {
              title: 'Tanpa Peci/songkok/baret.',
              details: [
                'Sikap sempurna, dengan gerakan cepat tangan di angkat kearah pelipis kanan, siku-siku 15 derajat seorang kedepan, kelima jari tangan rapat satu sama lain, telapak tangan seorang kebawah dan kekiri ujung jari tengah dan telunjuk mengenai pelipis.',
                'Pergelangan tangan lurus, bahu tetap seperti dalam sikap sempurna, pandangan mata tertuju kepada yang diberi salam.',
                'Jika selesai Salam, maka tangan di kembalikan secara cepat ke sikap sempurna kembali.'
              ]
            },
            {
              title: 'Memakai Peci/songkok/baret.',
              details: [
                'Pelaksanaan sama dengan No.1.a. perlu ditambah sedikit, yakni jari tengah dan telunjuk mengenai tepi bawah dan peci setinggi pelipis.'
              ]
            },
            {
              title: 'Memakai Peci yang ada kelep',
              details: ['Pelaksanaan sama dengan No.1.a. hanya jari tengah mengenai ujung kelep.']
            },
            {
              title: 'Membawa/menggunakan tongkat Pramuka',
              details: [
                'Sikap sempurna, tongkat ditangan kanan disamping badan, diangkat sedikit, tangan kiri ditekukkan kekanan depan dada (antara dada dan perut), tangan kiri lurus rata-rata air ke kanan, jari rapat dan ujung jari tengah menyentuh tongkat, pandangan lurus kepada yang diberi salam atau kepala dipalingkan kepada arah orang yang diberi salam.'
              ]
            }
          ]
        },
        {
          title: 'Dalam keadaan berjalan.',
          conditions: [
            {
              title: 'Jalan biasa',
              details: [
                'Dalam keadaan jalan biasa kemudian melaksanakan salam pelaksanaannya sama sepe rti No.1.a. dengan memalingkan muka atau kepala dan pandangan lurus tertuju kepa da orang diberi salam.',
                'Pelaksanaan salam + 3 langkah sesudahnya.'
              ]
            },
            {
              title: 'Membawa/memakai tongkat Pramuka.',
              details: [
                'Sikap membawa Tongkat di muka badan.',
                'Tongkat dibawa/dipegang dua tangan dalam sikap membawa di muka badan, tangan tetap dimuka badan dalam keadaan berjalan, dengan memalingkan kepala ke arah orang yang diberi salam.',
                'Tongkat disandang dikanan.',
                'Tetap dalam keadan jalan biasa, tangan kanan memegang tali sandang dengan bentuk siku-siku kedepan, tangan kiri ditekuk kekanan depan dada (seperti No.1.d) kepala dipalingkan kepada orang yang diberi salam.',
                'Tongkat disandang dikiri.',
                'Tetap dalam keadaan jalan biasa, tangan kiri memegang tali sandang, tangan kanan memberi salam seperti salam biasa dan pandangan lurus kepada orang yang diberi salam.'
              ]
            },
            {
              title: 'Dalam keadaan membawa barang',
              details: [
                'Barang Ringan.',
                'Apabila mebawa barang ringan di tangan kanan, maka barang tersebut dipindahkan ke tangan kiri, dan melakukan salam seperti biasa seperti pada petunjuk sebelumnya',
                'Barang berat.',
                'Apabila membawa barang yang berat atau membawa barang ditangan kiri dan kanan, maka salam cukup memalingkan muka/kepala dan mengucapkan salam atau cukup mengucapkan salam saja.'
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'salam-penghormatan',
      steps: [
        {
          conditions: [],
          title:
            'Cara melakukan Salam Penghormatan sama dengan keadaan berhenti lebih dahulu + 6 (enam) langkah menghadap penuh kepada yang diberi salam Penghormatan, da n selesai apabila yang di beri hormat telah membalas dan atau telah melewatinya. Apabila dalam keadan membawa tongkat, tongkat dipindahkan ke tangan kiri dan pangkal tongkat tetap ditanah di tempat semula, kemudian melakukan salam dengan tangan kanan seperti salam tanpa tongkat.'
        }
      ]
    },
    {
      key: 'salam-janji',
      steps: [
        {
          conditions: [],
          title:
            'Salam janji ini biasanya dilakukan ketika seorang anggota Pramuka dilantik dan mengucapkan Tri Satya sebagai Sumpah atau janji. Apabila seorang Pramuka dilantik Kenaikan Tingkat dalam Pramuka, sebelum Sumpah atau janji itu diucapkan ia memegang ujung Bendera Merah Putih dengan tangan kiri dan menempelkan Bendera pada dada, kemudian tangan kanan memberi Salam dan memulai mengucapkan Tri Satya.'
        }
      ]
    }
  ]
}

export default data
