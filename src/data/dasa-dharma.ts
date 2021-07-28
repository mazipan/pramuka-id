export interface DasaDharmaOrigin {
  preface: string
  data: string[]
}
export interface DasaDharmaMeaningData {
  details: string[]
}

export interface DasaDharmaMeaning {
  refer: boolean
  preface: string
  data: DasaDharmaMeaningData[]
}
export interface DasaDharma {
  id: string
  title: string
  preface: string
  data: {
    origin: DasaDharmaOrigin
    meanings: DasaDharmaMeaning
  }
}

const data: DasaDharma = {
  id: 'dasa-dharma',
  title: 'Dasa Dharma',
  preface:
    'Pengertian Dasa Dharma adalah Dasa: sepuluh, Dharma: Perbuatan baik (kebajikan). Dasa Dharma adalah sepuluh Kebajikan yang menjadi pedoman bagi Pramuka dalam bertingkah laku sehari-hari.',
  data: {
    origin: {
      preface: 'Dasa Dharma Pramuka Pramuka itu :',
      data: [
        'Takwa kepada Tuhan Yang Maha Esa',
        'Cinta alam dan kasih sayang sesama manusia',
        'Patriot yang sopan dan kesatria',
        'Patuh dan suka bermusyawarah',
        'Rela menolong dan tabah',
        'Rajin, terampil dan gembira',
        'Hemat, cermat dan bersahaja',
        'Disiplin, berani dan setia',
        'Bertanggungjawab dan dapat dipercaya',
        'Suci dalam pikiran, perkataan dan perbuatan'
      ]
    },
    meanings: {
      refer: true,
      preface: 'Arti dari masing-masing bait Dasa Dharma tersebut di atas adalah sebagai berikut:',
      data: [
        {
          details: [
            'Menjalankan semua perintah Tuhan serta meninggalkan segala larangan-larangan-Nya.',
            "Menbaca do'a atau niat karena Allah dalam setiap mengawali dan mengakhiri kegiatan dalam kehidupan sehari-hari.",
            'Patuh dan berbakti kepada kedua orang tua, serta sayang kepada saudara. dsb'
          ]
        },
        {
          details: [
            'Selalu menjaga kebersihan lingkungan baik disekolah maupun dirumah.',
            'Ikut menjaga kelestarian alam, baik flora maupun fauna.',
            'Membantu fakir miskin, yatim piatu, orang tua jompo dan mengunjungi yang sakit. dsb.'
          ]
        },
        {
          details: [
            'Belajar disekolah dengan baik.',
            'Menghormati yang lebih tua dan menyayangi yang lebih muda.',
            'Membiasakan diri untuk berani mengakui kesalahan dan membenarkan yang benar.',
            'Ikut serta dalam pertahan bela Negara.'
          ]
        },
        {
          details: [
            'Patuh kepada kedua orang tua, guru dan pembina dengan cara mengerjakan tugas sebaik-baiknya.',
            'Berusaha mufakat dalam setiap musyawarah.',
            'Tidak mengambil keputusan secara tergesa-gesa yang didapatkan tanpa melalui musyawarah.'
          ]
        },
        {
          details: [
            'Selalu berusaha menolong sesama yang sedang mengalami musibah atau kesusahan serta tidak pernah meminta atau mengharapikan imbalam (pamrih).',
            'Tabah dalam mengalami berbagai kesulitan dengan tidak banyak mengeluh, dan tak mudah putus asa.',
            'Bersedia menolong tanpa diminta. dsb.'
          ]
        },
        {
          details: [
            'Membiasakan menyusun jadwal dalam kegiatan sehari-hari.',
            'Tidak pernah bolos dari sekolah, selalu hadir diwaktu latihan atau pertemuan pramuka.',
            'Dapat membuat berbagai macam kerajinan atau hasta karya yang berguna.',
            'Selalu riang gembira diwaktu melakukan kegiatan atau pekerjaan.'
          ]
        },
        {
          details: [
            'Tidak boros dan bersikap hidup hemat.',
            'Rajin menabung.',
            'Bersikap hidup sederhana, tidak berlebih-lebihan.',
            'Tepat waktu (kesekolah, belajar, latihan, dll).',
            'Bisa membuat perencanaan sebelum tindakan.'
          ]
        },
        {
          details: [
            'Selalu tepat waktu sesuai jadwal yang ditentukan.',
            'Mendahulukan kewajiban dibanding sebelum meminta haknya.',
            'Berani mengambil keputusan.',
            'Tidak mengecewakan orang lain. dsb'
          ]
        },
        {
          details: [
            'Tidak mengelakkan amanat dengan sesuatu alasan yang dicari-cari.',
            'Jujur tidak mengada-ada.'
          ]
        },
        {
          details: [
            'Selalu berfikir positif dan menghargai sikap atau pendapat orang lain dan bisa menyumbangkan saran yang baik dengan cara yang baik.',
            'Berhati-hati mengendalikan diri dari ucapan yang tidak pantas dan menimbulkan ketidak percayaan orang lain pada dirinya.',
            'Berusaha menjaga diri dalam segala tindak tanduk perbuatan yang jelek melanggar menurut kehidupan masyarakat dan aturan agama.'
          ]
        }
      ]
    }
  }
}

export default data
