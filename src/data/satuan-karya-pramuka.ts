export interface SatuanKaryaPramukaGroup {
  text: string
  logo: string
  description: string
}
export interface SatuanKaryaPramukaList {
  text: string
  lists: string[]
}
export interface SatuanKaryaPramukaSection {
  name: string
  description: string
  groupType: string
  groups: SatuanKaryaPramukaList[] | SatuanKaryaPramukaGroup[]
}
export interface SatuanKaryaPramuka {
  title: string
  subtitle: string
  description: string
  source: string
  meaning: string
  sections: SatuanKaryaPramukaSection[]
}

const data: SatuanKaryaPramuka = {
  title: 'Materi Pramuka',
  subtitle: 'Satuan Karya Pramuka',
  description: 'Penjelasan lengkap mengenai Satuan Karya (Saka) Pramuka',
  source: 'https://id.m.wikipedia.org/wiki/Satuan_Karya_Pramuka',
  meaning: `
    Satuan Karya (Saka) Pramuka adalah wadah pendidikan guna menyalurkan minat, mengembangkan bakat, meningkatkan pengetahuan, keterampilan, kemampuan, dan
    pengalaman para anggota pramuka dalam berbagai bidang kejuruan serta memotivasi mereka untuk melaksanakan kegiatan nyata dan produktif sehingga
    memberikan bekal bagi kehidupannya dan pengabdiannya pada masayarakat, bangsa, dan negara sesuai dengan aspirasi pemuda Indonesia dan tuntutan perkembangan
    pembangunan dalam rangka peningkatan pertahanan nasional.`,
  sections: [
    {
      name: 'Organisasi',
      groupType: '',
      groups: [],
      description: `
        Saka dapat dibentuk di "Kwartir Ranting" atas kehendak dan minat yang sama dari Pramuka Penegak dan
        Pramuka Pandega, disesuaikan dengan situasu dan kondisi wilayahnya. Wewenang pengelolaan, pengendalian, dan
        pembinaan Saka berada di Kwartir Ranting, sedangkan pengesahan dilakukan oleh Kwartir Cabang. Apabila Kwartir
        Ranting belum mampu membentuk Saka, maka pembentukan Saka dapat dilaksanakan oleh Kwartir Cabang yang wewenang, pengelolaan,
        pengendalian, dan pembinaannya berada pada Kwartir Cabang. `
    },
    {
      name: 'Pembinaan',
      description: `
        Saka dibina oleh seorang Pamong Saka. Pamong Saka adalah Pembina Pramuka, terutama Pembina Pramuka Penegak/Pandega atau anggota dewasa lainnya,
        yang memiliki minat dalam satu bidang kegiatan Saka sesuai dengan minat anggota Saka yang bersangkutan. Pamong Saka diangkat dan dikukuhkan oleh
        Ketua Kwartir Cabang, atas usul Pimpinan Saka yang bersangkutan. Bila dalam Saka yang sejenis ada beberapa orang Pamong Saka, maka dipilih salah
        seorang sebagai kordinatornya. Masa bakti Pamong Saka adalah tiga tahun dan sesudahnya dapat diangkat kembali. Pamong Saka secara ex-officio menjadi
        anggota Mabi Saka dari Saka yang bersangkutan.`,
      groupType: 'group-object',
      groups: [
        {
          text: 'Tugas dan Tanggung Jawab Pamong Saka',
          lists: [
            'Mengelola pembinaan dan pengembangan Sakanya',
            'Menjadi Pembina Saka dan bekerja sama dengan Majelis Pembimbing Sakanya',
            'Mengusahakan instruktur, perlengkapan dan keperluan kegiatan Sakanya',
            'Mengadakan hubungan, konsultasi dan kerja sama yang baik dengan Pimpinan Saka, Kwartir, Majelis Pembimbing Saka, Gugusdepan dan Saka lainnya',
            'Mengkoordinasikan instruktur dengan Dewan Kerja Saka yang ada dalam Sakanya',
            'Menjadi anggota Mabi Saka',
            'Menerapkan Prinsip Dasar dan Metode Kepramukaan serta sistem Among dalam kegiatan pembinaan Sakanya',
            'Melaporkan perkembangan Sakanya kepada kwartir dan Mabi Saka yang bersangkutan'
          ]
        }
      ]
    },
    {
      name: 'Pelatihan',
      description: `
       Selain daripada Pamong Saka, untuk melatih anggota Saka dalam bidang Sakanya, maka di setiap Saka diadakan Instruktur Saka. Instruktur Saka adalah
       seseorang yang mempunyai kemampuan dan pengetahuan, keterampilan dan keahlian khusus di bidang tertentu yang bersedia membantu Pamong Saka dalam
       peningkatan kemampuan dan keterampilan anggotanya. Instruktur Saka diangkat dan dikukuhkan oleh Ketua Kwartir Cabang atas usul Pamong Saka dan Mabi Saka.`,
      groupType: 'group-object',
      groups: [
        {
          text: 'Tugas dan Tanggung Jawab Instruktur Saka',
          lists: [
            'Melaksanakan pendidikan dan latihan sesuai dengan keahliannya bagi para aggota Saka',
            'Menjadi penguji SKK bagi anggota Saka sesuai dengan bidang keahliannya dan melaporkan perkembangannya kepada Pamong Saka',
            'Menjadi penasihat bagi Dewan Saka dalam merencanakan, melaksanakan dan mengevaluasi kegiatan Saka',
            'Memberi motivasi kepada anggota Saka untuk membina dan mengembangkan bakat, minat dan kegemarannya',
            'Meningkatkan pengetahuan, kecakapan dan pengalamannya melalui berbagai pendidikan',
            'Mengikuti Orientasi Gerakan Pramuka',
            'Melaporkan pelaksanaan setiap kegiatan yang menjadi tugasnya'
          ]
        }
      ]
    },
    {
      name: 'Macam-macam Saka',
      description: 'Berbagai macam Satuan Kerja Pramuka.',
      groupType: 'group-object',
      groups: [
        {
          text: 'Saka Dirgantara',
          logo: 'saka-dirgantara.png',
          description: `Saka Dirgantara adalah wadah kegiatan untuk meningkatkan pengetahuan dan keterampilan praktis di bidang kedirgantaraan
            guna menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional. Satuan Karya ini membidangi bidang
            kedirgantaraan, umumnya Saka ini hanya berada di wilayah yang memiliki potensi kedirgantaraan, dengan kata lain memiliki landasan udara.`
        },
        {
          text: 'Saka Bhayangkara',
          logo: 'saka-bhayangkara.jpg',
          description: `
            Saka Bhayangkara adalah wadah Pendidikan guna menyalurkan minat dan mengembangkan bakat serta pengalaman para pramuka penegak dan pandega
            dalam berbagai ilmu pengetahuan dan teknologi di bidang kebhayangkaraan sehingga mereka menjadi anggota masyarakat yang baik, peduli
            terhadap keamanan,ketertiban masyarakat (Kamtibmas) baik lokal, nasional, maupun internasional. Saka Bhayangkara adalah Satuan Karya
            yang berada di bawah pembinaan Kepolisian Negara Republik Indonesia, Disamping itu Saka Bhayangkara merupakan Saka terbesar dan paling
            berkembang di Indonesia. Hal ini Karena Saka Bhayangkara dapat dibentuk di hampir seluruh wilayah Kwartir di Indonesia, tidak
            terbatas pada suatu sumber daya atau kondisi alam.
          `
        },
        {
          text: 'Saka Bahari',
          logo: 'saka-bahari.jpg',
          description: `
            Satuan Karya Bahari adalah wadah bagi Pramuka yang menyelenggarakan kegiatan-kegiatan nyata, produktif dan bermanfaat dalam rangka
            menanamkan rasa cinta dan menumbuhkan sikap hidup yang berorentasi kebaharian termasuk laut dan perairan dalam. Satuan Karya ini
            membidangi bidang Kelautan. Pembinaan Saka Bahari bekerja sama dengan pihak TNI AL, Profesional di bidang Olahraga Air, Departemen
            Pariwisata dan Departemen Kelautan. Umumnya Saka Bahari hanya berada di wilayah yang memiliki potensi di bidang Bahari.
          `
        },
        {
          text: 'Saka Bakti Husada',
          logo: 'saka-bakti-husada.jpg',
          description: `
            Saka Bakti Husada adalah wadah pengembangan pengetahuan, pembinaan keterampilan, penambahan pengalaman dan pemberian kesempatan
            untuk membaktikan dirinya kepada masyarakat dalam bidang kesehatan. Saka Bakti Husada bertujuan untuk mewujudkan kader pembangunan
            di bidang kesehatan, yang dapat membantu melembagakan norma hidup sehat bagi semua anggota Gerakan Pramuka dan masyarakat di lingkunganya.
          `
        },
        {
          text: 'Saka Bina Sosial',
          logo: 'saka-bina-sosial.jpg',
          description: `
           Saka Bina Sosial adalah satuan karya pramuka yang merupakan wadah kegiatan untuk meningkatkan pengetahuan dan keterampilan praktis dibidang
           usaha kesejahteraan sosial guna menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional.Sejauh ini hanya Kwarda Jawa
           Tengah yang mempunyai secara resmi Saka ini.
          `
        },
        {
          text: 'Saka Keluarga Berencana (Kencana)',
          logo: 'saka-keluarga-berencana.jpg',
          description: `
           Saka Keluarga Berencana (Kencana) adalah wadah kegiatan dan pendidikan untuk meningkatkan pengetahuan keterampilan praktis dan bakti
           masyarakat, dalam bidang Keluarga Berencana, Keluarga Sejahtera dan Pengembangan Kependudukan. Pembinaan Saka Kencana berada di bawah
           Gerakan Pramuka yang bekerja sama dengan Badan Keluarga Berencana Nasional (BKKBN).
          `
        },
        {
          text: 'Saka Kerohanian',
          logo: 'saka-kerohanian.jpg',
          description: `
            Saka Kerohanian adalah satuan karya pramuka yang merupakan wadah kegiatan untuk meningkatkan pengetahuan dan ketrampilamn praktis dibidang
            pekerjaan kerohanian menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional. Dulu Saka ini pernah aktif di bawah binaan
            Kwartir Cabang Hulu Sungai Tengah, Kalimantan Selatan. Sekarang Saka Kerohanian sudah tidak ada lagi.
          `
        },
        {
          text: 'Saka Pandu Wisata',
          logo: 'saka-pandu-wisata.jpg',
          description: `
          Saka Panduwisata adalah satuan karya pramuka yang merupakan wadah kegiatan untuk meningkatkan pengetahuan dan keterampilamn praktis dibidang
          kepariwisataan guna menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional. Pariwisata yang dimaksud adalah segala sesuatu
          yang berhubungan dengan wisata, termasuk pengusahaan objek dan daya tarik wisata serta usaha-usaha lain yang terkait dibidang tersebut.
          Berbeda dengan Saka-Saka yang lain. Saka Panduwisata dapat kedudukan di Objek dan Daya Tarik Wisata (ODTW), meskipun dapat pula berkedudukan di
          Kwartir Cabang. Sejauh ini hanya Kwarda Jawa Tengah yang mempunyai secara resmi Saka ini.
          `
        },
        {
          text: 'Saka Pekerjaan Umum (PU)',
          logo: 'saka-pekerjaan-umum.jpg',
          description: `
            Saka Pekerjaan Umum adalah satuan karya pramuka yang merupakan wadah kegiatan untuk meningkatkan pengetahuan dan ketrampilan praktis dibidang
            pekerjaan umum guna menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional. Dulu ini adalah salah satu Saka yang cukup aktif
            yang berada di bawah binaan Kwartir Daerah Kalimantan Selatan. Sekarang Saka Pekerjaan Umum sudah tidak ada lagi.
          `
        },
        {
          text: 'Saka Pustaka',
          logo: 'saka-pustaka.jpg',
          description: `
            Saka Pustaka adalah satuan karya pramuka yang merupakan wadah kegiatan untuk meningkatkan pengetahuan dan ketrampilamn praktis dibidang
            kepustakaan guna menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional. Saka Pustaka dapat kedudukan di Perpustakaan
            Umum, meskipun demikian dapat pula berkedudukan di Kwartir Cabang. Sejauh ini hanya Kwartir Daerah Jawa Tengah yang mempunyai secara resmi
            Saka ini.
          `
        },
        {
          text: 'Saka Taruna Bumi',
          logo: 'saka-taruna-bumi.jpg',
          description: `
            Saka Taruna Bumi adalah wadah bagi para Pramuka untuk meningkatkan dan mengembangkan kepemimpinan, pengetahuan, pengalaman, keterampilan
            dan kecakapan para anggotanya, sehingga mereka dapat melaksanakan kegiatan nyata dan produktif serta bermanfaat dalam mendukung kegiatan
            pembangunan pertanian. Pembinaan Saka Taruna Bumi dilakukan oleh Gerakan Pramuka bekerja sama dengan Departemen Pertanian, LIPI, dan
            Lembaga Holtikultura.
          `
        },
        {
          text: 'Saka Teknologi',
          logo: 'saka-teknologi.jpg',
          description: `
            Saka Teknologi adalah satuan karya pramuka yang merupakan wadah kegiatan untuk meningkatkan pengetahuan dan ketrampilamn praktis dibidang
            ilmu teknologi guna menumbuhkan kesadaran untuk membaktikan dirinya dalam pembangunan nasional. Sejauh ini Saka Teknologi hanya ada di
            Kwartir Cabang Purworejo. Berbeda dengan Kwartir Daerah Nusa Tenggara Barat menamakan Saka Teknologi dengan penamaan Saka Informasi dan
            Teknologi.
          `
        },
        {
          text: 'Saka Milenial',
          logo: 'saka-milenial.jpg',
          description: `
            Saka Milenial adalah merupakan kepanjangan dari Satuan Karya Pramuka Mitra Inovasi dan Literasi Teknologi Informasi Digital adalah Satuan Karya
            Pramuka yang baru yang digagas secara langsung oleh Ketua Majelis Pembimbing Daerah Jawa Tengah Ganjar Pranowo pada pelaksanaan Musyawarah
             Daerah Kwartir Daerah Jawa Tengah ke XII tahun 2018 di Solo. Saka Milenial adalah Satuan Karya Pramuka yang dibentuk sebagai wadah
             pembinaan Anggota Pramuka didalam menyiapkan diri menghadapi Industri 4.0
          `
        },
        {
          text: 'Saka Wanabakti',
          logo: 'saka-wanabakti.jpg',
          description: `
            Saka Wanabakti adalah wadah bagi Pramuka Penegak dan Pramuka Pandega untuk melaksanakan kegiatan nyata, produktif dan bermanfaat dalam
            rangka menanamkan rasa tanggung jawab terhadap pelestarian sumber daya alam dan lingkungan hidup. Pembinaan Saka Wanabhakti bekerja sama
            dengan Departemen Kehutanan, Perhutani dan LSM Lingkungan Hidup/Lembaga Profesional terkait.
          `
        },
        {
          text: 'Saka Wira Kartika',
          logo: 'saka-wira-kartika.jpg',
          description: `
            Saka Wira Kartika baru berupa Saka rintisan yang mulai dilaksanakan pada akhir tahun 2007. Pembentukannya berdasarkan Peraturan Bersama
            Kepala Staf Angkatan Darat dengan Ketua Kwarnas Gerakan Pramuka nomor 182/X/2007 dan 199 tahun 2007 tanggal 28 Oktober 2007 tentang
            kerja sama dalam usaha pembina dan pengembangan pendidikan bela negara dan kepramukaan.
          `
        },
        {
          text: 'Saka Kalpataru',
          logo: 'saka-kalpataru.jpg',
          description: `
            Saka Kalpataru merupakan satuan Karya Pramuka tempat meningkatkan pengetahuan, pengalaman, ketrampilan dan kecakapan, dan kepemimpinan
            Pramuka Penegak dan Pandega serta sebagai wadah untuk menanamkan kepedulian dan rasa tanggungjawab dalam mengelola, menjaga, dan
            mempertahankan dan melestarikan lingkungan untuk keberlanjutan generasi sekarang dan mendatang. Pembentukan Saka Kalpataru bertujuan
            untuk memberi memberi wadah pendidikan dan pembinaan bagi Pramuka Penegak dan Pramuka Pandega untuk menyalurkan minat, mengembangkan
            bakat, kemampuan,pengalaman dalam bidang pengetahuan dan teknologi serta keterampilan khususnya yang berkaitan dengan substansi
            Perlindungan dan Pengelolaan Lingkungan Hidup (PPLH) yang menjadi bekal penghidupannya untuk mengabdi pada masyarakat, bangsa dan Negara.
          `
        },
        {
          text: 'Saka Widya Budaya Bhakti',
          logo: 'saka-widya-bakti.jpg',
          description: `
            Saka Widya Budaya Bhakti merupakan wadah dalam Satuan Karya Pramuka untuk mendongkrak optimilisasi pencapaian tujuan pendidikan dan kebudayaan melalui
            Program Pendidikan Nonformal (PNF).
          `
        },
        {
          text: 'Saka Adhayasta Pemilu',
          logo: 'saka-adhyasta-pemilu.jpg',
          description: `
            Saka Adhayasta Pemilu merupakan salah satu satuan karya Pramuka yang merupakan wadah pengawasan pemilu untuk mewujudkan pemilu yang bebas dan adil.
            Satuan kerja ini juga berperan meningkatkan pengetahuan dan keterampilan praktis dalam bidang pencegahan dan pengawasan pemilu guna menumbukan
            kesadaran berperan serta dalam pengawasan pemilu.
          `
        },
        {
          text: 'Saka Telematika',
          logo: 'saka-telematika.jpg',
          description: `
            Saka Telematika adalah Satuan Karya Pramuka yang membidangi masalah teknologi dan informasi, Saka ini terbilang baru dan dirintis
            oleh Kwartir Daerah Jawa Barat dengan bekerja sama dengan Telkom sejak Maret 2011 yang lalu, Saka Telematika ditandatangani oleh
            Direktur Konsumer Telkom, I Nyoman G. Wiryanata bersama Ketua Kwarda Pramuka Jawa Barat Dede Yusuf Effendi di GKP Telkom di
            Jalan Japati 1 Bandung. Cianjur dan Bekasi adalah beberapa daerah di Indonesia yang telah membentuk Saka tersebut. Tujuan dibentuknya
            Saka Telematika ini adalah menjadikan ikon terbaru dari Pramuka sendiri juga mendukung 3,3 juta blog Pramuka Jawa Barat, tujuan lainnya
            memiliki rasa cinta kepada telekomunikasi, edutainment, multimedia dan informatika Indonesia yang menjadikan Pramuka Indonesia
            lebih dekat dengan fitur-fitur teknologi yang semakin berkembang
          `
        }
      ]
    }
  ]
}

export default data
