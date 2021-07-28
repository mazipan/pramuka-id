export interface PedomanSkuData {
  title: string
  meaning: string
}

export interface PedomanSku {
  type: string
  typeDetail: string
  data: PedomanSkuData[]
}

const data: PedomanSku[] = [
  {
    type: 'PRAMUKA PENGGALANG',
    typeDetail: 'PENGGALANG RAMU',
    data: [
      {
        title:
          'Rajin dan giat mengikuti latihan pasukan penggalang ramu, sekurang-kurangnya 10 kali latihan.',
        meaning:
          'Seorang pramuka harus hadir dan mengikuti latihan pramuka penggalang minimal 6 kali berturut-turut (Absensi).'
      },
      {
        title: 'Hafal dan mengerti isi Dasa Dharma dan Tri Satya.',
        meaning: 'Hafal dan dapat menjelaskan Dasa Dharma dan Tri Satya.'
      },
      {
        title: 'Dapat memberi salam pramuka, dan tahu maksud dan penggunaannya.',
        meaning:
          'Seorang pramuka tahu macam-macam salam pramuka, cara, juga sikap pada waktu memberikan salam kepada siapa dan kapan/dimana salam itu diucapkan.'
      },
      {
        title: 'Tahu arti lambang gerakan pramuka.',
        meaning:
          'Seorang pramuka mengerti arti kiasan dari lambang pramuka (Tunas Kelapa) mulai dari ujung atas hingga akarnya.'
      },
      {
        title:
          'Tahu cara menggunakan bendera kebangsaan Indonesia tahu sejarahnya dan tahu arti kiasan warna-warnanya.',
        meaning:
          'Seorang pramuka mengerti cara mengibarkan bendera merah putih, menurunkan bendera, memelihara bendera dan tahu sejarah bendera kebangsaan serta arti kiasan warnanya.'
      },
      {
        title:
          'Dapat dengan hafal menyanyikan lagu kebangsaan Indonesia Raya bait pertama di muka pasukan penggalang atau di muka pendengar-pendengar lain dan tahu sikap yang harus dilakukan jika lagu kebangsaan diperdengarkan atau dinyanyikan pada suatu upacara.',
        meaning:
          'Bisa dan hafal menyanyikan lagu kebangsaan di muka pasukan pramuka, dan tahu sikap yang harus dilakukan pada saat menyanyikan atau mendengarkan lagu kebangsaan dinyanyikan.'
      },
      {
        title: 'Tahu sejarah lagu kebangsaan Indonesia Raya.',
        meaning: 'Tahu pencipta, waktu dan tempat dinyanyikan.'
      },
      {
        title: 'Hafal pancasila dan tahu artinya',
        meaning:
          'Hafal dan mengerti arti lima lukisan perisai yang ada pada pancasila mulai dari 1 sampai 5.'
      },
      {
        title: 'Biasa berbahasa Indonesia diwaktu mengikuti pertemuan-pertemuan penggalang.',
        meaning: 'Seorang pramuka bisa berbahasa bahasa Indonesia dengan baik dan benar.'
      },
      {
        title: 'Tahu struktur organisasi dan tanda-tanda pengenal dalam Gugus Depan.',
        meaning:
          'Seorang pramuka mengerti struktur pimpinan tertinggi pramuka di Gugus Depannya mulai dari KAMABIGUS sampai dengan pasukan pramuka, dan mempunyai atribut (topi, hasduk, tongkat dll) serta mengetahui cara penggunaannya.'
      },
      {
        title: 'Dapat berbaris.',
        meaning: 'Seorang pramuka mengerti PBB serta bisa memimpin PBB.'
      },
      {
        title:
          'Dapat menunjuk sedikitnya 6 arah mata angin, dapat menggunakan kompas dan dapat membaca jam.',
        meaning:
          'Mengerti dan hafal serta bisa menunjukkan 6 arah mata angin, dapat menggunakan kompas, membaca jam (24 jam).'
      },
      {
        title:
          'Dapat membuat dan menggunakan simpul mati, simpul hidup, simpul tiang, simpul ayam, simpul pangkal dan dapat menyusuk tali.',
        meaning:
          'Seorang pramuka harus terampil dalam menggunakan tali setidak-tidaknya 6 macam simpul.'
      },
      {
        title: 'Dapat menyampaikan berita secara lisan.',
        meaning:
          'Contoh: Kami pramuka penggalang melaporkan bahwa pada hari Minggu tanggal 3 Juli 2001 pukul 12.15 WIB telah terjadi kecelakaan di jalan raya Dr. Wahidin, SH te patnya di depan toko micdonall antara pengendara sepeda motor dengan cold, pengendara sepeda motor terluka berat dan dibawa kerumah sakit terdekat.'
      },
      {
        title:
          'Dapat mengumpulkan keterangan untuk memperoleh pertolongan pertama pada kecelakaan, dan dapat melaporkannya kepada dokter, rumah sakit, pamong praja, polisi , atau keluarga korban.',
        meaning:
          'Seorang pramuka dapat mencari keterangan antara lain identitas korban, keadaan luka (cidera) jika terjadi kecelakaan yang memakan korban baik luka ringan ataupun berat dan selanjutnya dapat memberikan pertolongan (PPPK, PPGD).'
      },
      {
        title: 'Selalu berpakaian rapih dan memelihara kesehatan.',
        meaning:
          'Selalu memelihara kesehatan (hidup teratur, istirahat yang cukup, olahraga) dan menjaga kebersihan lingkungan sekolah dan lingkungan rumah.'
      },
      {
        title:
          'Untuk puteri, dapat mengatur meja makan, atau menghidangkan dan makanan kecil pada tamu.',
        meaning: 'Bisa mengatur meja makanan dan cara menghidang-kan makanan'
      },
      {
        title: 'Untuk putera, dapat membuat 2 macam hasta karya dengan macam bahan yang berbe da.',
        meaning:
          'Bisa membuat alat rumah tangga yang dianggap mudah/gampang dengan meng gunakan bahan bekas atau tidak bisa dipakai lagi. Contoh : Kertas, kayu, kawat, tanah liat dll.'
      },
      {
        title: 'Memiliki buku Tabanas, buku tabungan pramuka, atau buku tabungan pelajar. ',
        meaning: 'Mempunyai buku tabungan yang masih berlaku.'
      },
      {
        title:
          'Setia membayar uang iuran kepada Gugus Depannya sedapat-dapat dengan uang yang diperolehnya dan usahanya sendiri.',
        meaning: 'Bisa membayar iuran tanpa membebani atau meminta pada orang lain (orang tua).'
      },
      {
        title:
          'Untuk penggalang yang beragama islam: a. Dapat mengucap kalimat syahadat dan b. Mengerti rukun iman dan rukun islam c. Melakukan sholat berjamaah',
        meaning:
          'Hafal dan mengerti syahadat, rukun iman, rukun islam, dan cara melakukan sholat berjamaah.'
      }
    ]
  },
  {
    type: 'PRAMUKA PENGGALANG',
    typeDetail: 'PENGGALANG RAKIT',
    data: [
      {
        title:
          'Rajin dan giat mengikuti latihan pasukan sebagai Penggalang Rakit, sekurang-kurangnya 10 kali latihan.',
        meaning:
          'Seorang Pramuka Penggalang Ramu wajib hadir setidak-tidaknya 10 kali berturut-turut (Absensi).'
      },
      {
        title: 'Bersungguh-sungguh mengamalkan Dasa Dharma dan Tri Satya.',
        meaning:
          'Berupaya membuktikan pengamalan Dasa Dharma dan Tri Satya dalam kehidupan sehari-hari.'
      },
      {
        title: 'Tahu struktur organisasi dan tanda-tanda Pengenal dalam Gerakan Pramuka.',
        meaning: `Struktur Organisasi Pramuka mulai dari pusat sampai Anggota Pramuka, adalah sebagai berikut
				Pramuka Utama = Presiden RI
				Nasional = Kwarnas
				Daerah/Propinsi = Kwarda
				Daerah/Kabupaten = Kwarcab
				Kecamatan = Kwarran
				Sekolah = GUDEP (Gugus Depan)
				Adapun tanda-tanda pengenal dalam Pramuka yang harus di ketahui misalnya tanda pangkat Penggalang Ramu, Rakit, Terap, Penegak, Pandega dst.
				`
      },
      {
        title: 'Tahu arti Lambang Negara Republik Indonesia.',
        meaning: 'Mengetahui dan dapat menjelaskan butir-butir Pancasila.'
      },
      {
        title: 'Tahu hari-hari raya Nasional dan sejarah sedikitnya 3 orang Pahlawan Nasional.',
        meaning:
          'Bisa menyebutkan tanggal dan hari Nasional, dan nama Pahlawan Nasional, misalnya H. Agus Salim, RA. Kartini, Sultan Hasanuddin dll. serta tahu sejarahnya.'
      },
      {
        title:
          'Tahu susunan pemerintah daerah tingkat II sampai ke Desa, dan tahu nama dan alamat Kepala Desa dan beberapa tokoh masyarakat lain di sekitar tempat tinggalnya.',
        meaning:
          'Bisa menyebutkan atau menulis susunan perangkat pemerintah dari tingkat Kabupaten sampai Desa, dan tahu nama Kepala Desa, tokoh masyarakat di daerah tempat tinggalnya.'
      },
      {
        title:
          'Pernah ikut serta kerja bakti gotong royong yang ditugaskan oleh pembinanya di sekolahnya di kampungnya, di tempat ibadah atau tempat lain.',
        meaning:
          'Bersedia melaksanakan kerja bakti dengan baik sebagai tugas dari kakak pembina atau guru.'
      },
      {
        title:
          'Dapat dengan hafal menyanyikan di muka Pasukan Penggalang atau di muka pendengar lain lagu-lagu sang Merah Putih (Ibu Sud). Bagimu Negeri, Maju Tak Gentar, Satu Nusa Satu Bangsa dan barat sampai ketimur,dan sedikitnya satu lagu Daerah tempat tinggalnya.',
        meaning:
          'Bisa menyanyikan lagu wajib dengan judul tersebut di muka Pasukan Pramuka Penggalang serta ditambah satu lagu daerah.'
      },
      {
        title: 'Dapat menyajikan satu macam kegiatan seni budaya.',
        meaning:
          'Anggota Pramuka Ramu berani menampilkan satu macam kegiatan yang berhubungan dengan seni budaya, misalnya kabaret, menyanyi, melawak, drama/sandiwara, sulap, membaca puisi dan lain sebagainya.'
      },
      {
        title: 'Tahu adat sopan santun pergaulan Indonesia.',
        meaning:
          'Anggota Pramuka mengerti tatak rama dan sopan santun. Misalnya cara berbicara menggunakan bahasa kromo inggil (dalam bahasa daerah), mengucapkan salam ketika masuk rumah atau tempat penting. dll'
      },
      {
        title: 'Dapat memimpin barisan Pramuka.',
        meaning:
          'Sebagai Penggalang Ramu bisa memimpin barisan pasukan Penggalang dan dapat membentuk barisan dengan menggunakan aba-aba isyarat contoh membuat lingkaran besar, lingkaran kecil, setengah lingkaran, angkare. dll'
      },
      {
        title: 'Dapat menerima dan mengirim berita dengan isyarat Morse atau isyarat Semaphore.',
        meaning:
          'Anggota Pramuka Penggalang Ramu bisa memberi berita dengan isyarat Morse atau Semaphore serta mengerti saat menerima berita isyarat tersebut.'
      },
      {
        title: 'Dapat memperbaiki kerusakan kecil pada alat-alat rumah tangga.',
        meaning:
          'Anggota Penggalang Ramu trampil atau dapat memperbaiki kerusakan yang terjadi pada alat-alat rumah tangga atau pakaian seperti panci bocor, mengganti sumbu kompor, mengecat tembok, menjahit pakaian yang robek, dll.'
      },
      {
        title: 'Dapat memberi pertolongan pertama pada kecelakaan ringan.',
        meaning:
          'Bisa memberikan bantuan pertolongan pertama kepada orang lain yang sedang kecelakaan ringan misalnya menolong teman yang sedang sakit perut, muntah, pingsan, dll.'
      },
      {
        title: 'Tahun bahan-bahan makanan yang bernilai gizi.',
        meaning:
          'Mengerti jenis-jenis makanan yang mengandung gizi misalnya karbohidrat (beras, jagung, ketela pohon, ubi jalar, sagu) kegunaannya adalah untuk menambah tenaga (sumber energi) mineral (garam, ikan teri, ikan asin) kegunaannya untuk menjaga atau memelihara kesehatan.'
      },
      {
        title: 'Tahu beberapa macam penyakit menular.',
        meaning:
          'Mengerti macam-macam penyakit menular misalnya influenza, malaria, kadas, panu, dll.'
      },
      {
        title:
          'Memelihara kebersihan salah satu ruangan dan halaman di rumahnya, di sekolah nya, di tempat ibadah atau tempat lain.',
        meaning: 'Selalu menjaga kebersihan dimanapun berada dengan membuang sampah pada tempat.'
      },
      {
        title: 'Dapat memasak makanan diperkemahan untuk sedikitnya 5 orang.',
        meaning: 'Bisa memasak.'
      },
      {
        title:
          'Melakukan salah satu cabang olah raga atletik atau salah satu cabang olah raga renang.',
        meaning:
          'Misalnya: Lari jarak pendek (100m dan 200m), lari jarak menengah (1000m dan 1500m) atau renang seperti renang gaya dada, gaya punggung, gaya bebas atau gaya kupu-kupu.'
      },
      {
        title: 'Hemat dan cermat dengan segala miliknya.',
        meaning:
          'Sebagai Penggalang Ramu harus bisa menggunakan barang yang dimilikinya dengan hemat dan cermat tanpa boros.'
      },
      {
        title:
          'Memiliki buku tabanas, buku tabungan pramuka, atau buku tabungan pelajar, dan sudah menabung uang secara teratur dalam buku tabungan itu selama sekurang-kurangnya 8 minggu sejak menjadi Penggalang Ramu.',
        meaning: 'Rajin menabung.'
      },
      {
        title:
          'Setia membayar uang iuran kepada Gugus Depannya, sedapat-dapat dengan uang yang diperolehnya dari usahanya sendiri.',
        meaning: 'Bisa membayar iuran tanpa membebani atau meminta pada orang lain (orang tua).'
      },
      {
        title:
          'Pernah memelihara sedikitnya satu macam tanaman berguna, atau sedikitnya satu jenis binatang ternak, selama kira-kira 2 bulan.',
        meaning:
          'Sebagai Penggalang Ramu bisa memelihara tanaman misalnya tanaman dalam pot atau bisa memelihara (ternak) binatang seperti ayam, itik, ikan lele.'
      },
      {
        title: 'Dapat membuat peta lapangan dan skala pemandangan.',
        meaning:
          'Bisa membuat peta yang menggambarkan luas dan bentuk lapangan suatu tempat (area perkemahan, lokasi dan sebagainya).'
      },
      {
        title: 'Sudah pernah berkemah sekurang-kurangnya 4 hari berturut-turut.',
        meaning:
          'Sebagai Penggalang Ramu, harus pernah terlibat dalam mengikuti perkema han, baik perkemahan kecil (Gugus Depan), sampai dengan perkemahan besar yang di ikuti oleh ratusan orang.'
      },
      {
        title:
          'Untuk penggalang yang beragama islam: a. Hafal dan dapat membaca doa harian. b. Tahu riwayat singkat Nabi Muhammad S.A.W.',
        meaning:
          'Hafal bacaan-bacaan doa harian dan bisa menceritakan riwayat singkat Nabi Muhammad. Contoh Nabi Muhammd adalah seorang Rosul Allah, berasal dari kabilah Quraisy putera Abdullah dan Siti Aminah, dilahirkan di Makkah tanggal 12 Rabiul Awal tahun Gajah, dikarenakan pada hari kelahiran itu Raja Abraham dengan bala tentaranya yang mengendarai gajah hendak menggempur dan menghancurkan Kabah. Na mun Allah tidak meridhainya dan mengazab Raja Abraham beserta bala tentaranya de ngan mendatangkan burung Ababil yang telah siap dengan batu Neraka yang membara dan sangat panas dikakinya lalu dilemparkan batu tersebut ke Raja Abraham berserta bala tentaranya dan hancurlah raja congkak tersebut seperti hancunya daun yang dimakan ulat. Ayahnya telah meninggal sejak beliau masih dalam kandungan Ibunya benama Siti Aminah, ibunyapun meninggal sejak beliau masih berumur 6 tahun disaat berziarah ke makam ayahnya kemudian beliau diasuh oleh Ummu Aiman pembantu ayahnya.'
      }
    ]
  },
  {
    type: 'PRAMUKA PENGGALANG',
    typeDetail: 'PENGGALANG TERAP',
    data: [
      {
        title:
          'Rajin dan giat mengikuti latihan pasukan sebagai Penggalang Rakit, sekurang-kurangnya 10 kali latihan.',
        meaning: 'Mengikuti latihan Pramuka sekurang-kurangnya 10 kali berturut turut (tanpa absen)'
      },
      {
        title: 'Tahu arti dan sejarah Sumpah Pemuda.',
        meaning: 'Mengerti dan bisa menyampaikan sejarah sumpah pemuda.'
      },
      {
        title: 'Bersungguh-sungguh mengamalkan Pancasila.',
        meaning: 'Menghayati, mengamalkan Pancasila dengan sungguh-sungguh.'
      },
      {
        title: 'Mengetahui tentang perserikatan bangsa-bangsa.',
        meaning:
          'Perserikatan bangsa-bangsa (PBB) bertujuan tentang perdamaian dunia dan mempererat persahabatan antar bangsa.'
      },
      {
        title: 'Tahu tempat-tempat penting di Kecamatan tempat tinggalnya.',
        meaning:
          'Mengetahui tempat/alamat penting di Kecamatannya misalnya kantor Kecamatan, Puskesmas, pasar, dll.'
      },
      {
        title:
          'Membuktikan perhatiannya terhadap industri yang ada di daerahnya, atau melatih dir dalam suatu kerajinan tangan yang berguna.',
        meaning:
          'Terampil dalam membuat kerajinan tangan misalnya membuat figura foto, topi dari kertas, hiasan janur, sandal dari kayu, dll.'
      },
      {
        title:
          'Sekurang-kurangnya 2 kali pernah ikut serta kerja bakti gotong royong yang di tugaskan oleh pembinanya di sekolahnya, di kampungnya, di tempat ibadah, atau di tempat lain atau pernah membantu lembaga seperti PMI, LSD, BIMAS, PKK, Karang Taruna, atau lain sebagainya.',
        meaning: 'Melaksanakan tugas, atau membantu lembaga sosial yang sedang mempunyai kegiatan.'
      },
      {
        title: 'Dapat menaksir jarak, tinggi, luas, isi, berat, kecepatan, suhu dan sebagainya .',
        meaning: 'Mengukur dengan mengira-ngira.'
      },
      {
        title: 'Dapat membuat peta pita.',
        meaning:
          'Membuat laporan rute perjalanan menggunakan alat kertas dan pita, dengan tujuan membandingkan jarak antara peta pita dengan jarak yang sebenarnya misa lnya rute sebuah penjelajahan.'
      },
      {
        title: 'Dapat menentukan arah mata angin tanpa menggunakan kompas.',
        meaning:
          'Hafal atau mengerti dimana barat, timur, selatan, utara tampa mengunakan bantuan kompas.'
      },
      {
        title: 'Dapat merencanakan dan mempersiapkan rapat kecil.',
        meaning:
          'Dapat merencanakan dan mempersiapkan rapat seperti materi rapat, daftar hadir, tempat, buku catatan hasil rapat, dll.'
      },
      {
        title: 'Dapat membuat alat rumah tangga yang sederhana.',
        meaning:
          'Pada Pramuka golongan Penggalang Terap ini lebih terampil lagi dari pada Penggalang Rakit membuat alat-alat rumah tangga. Misalnya membuat gayung air dari batok kelapa atau kaleng bekas, membuat keset, tiang jemuran, dll.'
      },
      {
        title: 'Dapat memberi pertolongan pada kecelakaan.',
        meaning: 'Dapat memberikan pertolongan pada orang lain yang mengalami kecelakaan .'
      },
      {
        title:
          'Dapat menerapkan pengetahuan tentang kesehatan dan tentang kebersihan kamar mandi, cuci kakus di perkemahan di rumah, atau di tempat lain.',
        meaning:
          'Selalu menjaga kebersihan dan kesehatan, serta bisa menjelaskan pada orang lain perihal pentingnya kebersihan dan kesehatan.'
      },
      {
        title:
          'Melakukan salah satu cabang Olah Raga atletik atau slah satu cabang Olah Raga renang dan melakukan salah satu cabang Olah Raga lain serta tahu peratuarn permainannya.',
        meaning:
          'Melakukan Olah Raga atletik atau renang dan yang paling penting mengerti peraturan dalam permainannya.'
      },
      {
        title:
          'Memiliki buku tabanas, buku tabungan Pramuka, atau buku tabungan Pelajar dan sudah menabung uang secara teratur dalam buku tabungan itu selama sekurang-kurangnya 8 minggu sejak menjadi penggalang Rakit dan sebagian dari pada uang itu diperolehnya dengan usahanya sendiri.',
        meaning:
          'mempunyai buku tabungan dan sudah menabung secara teratur selama 8 minggu berturut-turut, dan sebagian dari uang tabungan adalah hasil dari usahanya sendiri.'
      },
      {
        title:
          'Setia membayar Uang Iuran kepada Gugus Depannya, dengan uang yang seluruhnya atau sebagian diperolehnya dari usahanya sendiri.',
        meaning: 'dapat membayar iuran tanpa harus membebani orang lain atau Orang Tua.'
      },
      {
        title: 'Pernah membantu dalam menjalankan Administrasi keuangan Gugus Depannya. ',
        meaning:
          'Membantu mengelola Keuangan Gugus Depan seperti turut serta bertanggung jawab dalam pembuatan perlengkapan anggota Gugus Depannya. Misalnya membuat Gapura Tenda, mebeli tenda, dll.'
      },
      {
        title:
          'Untuk Penggalang Putera sudah pernah berjalan kaki selama 2 hari berturut-turut, dengan melaksanakan tugas yang di berikan oleh Pembinanya.',
        meaning: 'Misalnya pernah mengikuti acara Gerak Jalan hari ini dan besok paginya.'
      },
      {
        title:
          'Untuk Penggalang Puteri pernah mengurus suatu ru-mah tangga selama 2 hari berturut-turut.',
        meaning:
          'Untuk Penggalang Puteri dapat mengerjakan pekerjaan rumah tangga seperti memasak, mencuci, membersihkan perabot rumah tangga, menyapu halaman dan lain sebagainya selama 2 hari berturut-turut.'
      },
      {
        title:
          'Dapat menampilkan suatu macam kegiatan seni budaya di hadapan pramuka-pramuka atau di hadapan penonton-penonton lain.',
        meaning:
          'Berani menampilkan satu macam kegiatan yang berhubungan dengan seni budaya, misalnya kabaret, menyanyi, melawak, drama/sandiwara, sulap, membaca puisi dan lain sebagainya.'
      },
      {
        title: 'Memiliki sedikitnya satu Tanda Kecakapan Khusus .',
        meaning:
          'Cara menempuh ujian Tanda Kecakapan Khusus (TKK) di sesuaikan dengan Petunjuk Pelaksanaan (PP) yang mengatur tentang Tanda Kecakapan Khusus.'
      },
      {
        title:
          'Untuk Penggalang yang beragama islam. a. Hari Raya Islam. b. Dapat bertindak sebagai Imam dalam sholat Tahu berjamaah di perkemahaan. ',
        meaning:
          'Mengerti hari Raya Islam seperti Tanggal 1 Syawal = Hari Raya Idul Fitri, tanggal 10 Dzulhijjah = Hari Raya Idul Adha, dll. Dan juga bisa bertindak se bagi imam sholat.'
      }
    ]
  }
]

export default data
