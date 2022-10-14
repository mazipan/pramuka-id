export interface KnotType {
  title: string;
  description: string;
  imageUrl: string;
  utility: string;
  steps?: string[];
}

export interface Knots {
  title: string;
  subtitle: string;
  description: string;
  source: string;
  prefaces: string;
  knots: KnotType[];
}

const data: Knots = {
  title: 'Tali Temali',
  subtitle: 'Tali Temali dalam Pramuka',
  description: 'Kumpulan tali - temali dalam kegiatan kepramukaan',
  source: 'https://bukubiruku.com/tali-temali-dalam-pramuka/',
  prefaces:
    "Dalam tali temali kita sering mencampuradukkan antara tali, simpul dan ikatan. Hal ini sebenarnya berbeda sama sekali. Tali adalah bendanya. Simpul adalah hubungan antara tali dengan tali. Ikatan adalah hubungan antara tali dengan benda lainnya, misal kayu, balok, bambu dan sebagainya.",
  knots: [
    {
      title: 'Simpul Hidup',
      description:
        "Simpul hidup fungsinya untuk mengikat suatu benda dengan kuat, tapi untuk melepasnya tidak susah, tali temali simpul ini biasanya digunakan untuk mengikat hewan.",
      utility: 'Dalam Pramuka simpul hidup ini berfungsi untuk mengikat tiang.',
      imageUrl: '/assets/tali-temali/simpul-hidup-1.webp',
    },
    {
      title: 'Simpul Mati',
      description:
        "Simpul mati adalah simpul yang biasanya digunakan untuk mengakhiri suatu simpul. Walaupun simpul ini terlihat mudah dalam membuatnya, namun banyak juga yang salah dalam membuatnya.",
      utility: 'Simpul Ini berfungsi untuk menyambung dua utas tali yang sama besarnya dan tidak licin.',
      imageUrl: '/assets/tali-temali/simpul-mati.webp',
    },
    {
      title: 'Simpul Pangkal',
      description:
        "Simpul Pangkal merupakan salah satu simpul yang sering sekali digunakan untuk mengawali atau mengakhiri suatu simpul lainnya. Seperti contoh; Apabila kamu ingin membuat simpul palang maka langkah pertama yang harus kamu lakukan adalah pangkal terlebih dahulu pada salah satu tongkat. Terdapat dua cara dalam membuat tali temali simpul ini, yaitu pertama dengan cara membuat lingkaran dan yang kedua dengan cara dililitkan.",
      utility: 'Simpul pangkal berfungsi untuk permulaan ikatan dalam mengikat tali pada tongkat atau tiang, kayu',
      imageUrl: '/assets/tali-temali/simpul-pangkal.webp',
    },
    {
      title: 'Simpul Jangkar (Cow Hitch)',
      description: "Gunanya untuk mengikat jangkar atau benda lainnya yang berbentuk ring.",
      imageUrl: '/assets/tali-temali/simpul-jangkar.webp',
      utility: 'Fungsi dari tali temali simpul ini adalah untuk membuat tanduk darurat atau dapat juga digunakan untuk mengikat timba atau ember.',
      steps: [
        "Bagilah tali menjadi dua kemudian lingkarkan pada benda yang ingin ditali",
        "Tariklah kedua badan tali, sehingga semua tali masuk ke dalam sosok."
      ]
    },
    {
      title: 'Simpul Tarik',
      description:
        "Tali Temali simpul tari (bowline knot) menghasilkan loop tali yang tidak bisa mengecil ataupun membesar lagi.",
      imageUrl: "/assets/tali-temali/simpul-tarik.webp",
      utility: "Fungsi dari tali temali simpul tarik adalah untuk turun ke jurang atau dari atas pohon.",
      steps: [
        "Menambatkan tali kepada benda atau tiang.",
        "Mengikat leher binatang supaya tidak tercekik",
        "Apabila dua simpul tiang saling dihubungkan bisa berguna juga untuk menyambung tali."
      ]
    },
    {
      title: "Simpul Laso",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-laso.webp",
      utility: "Apabila dua simpul tiang saling dihubungkan bisa berguna juga untuk menyambung tali."
    },
    {
      title: "Simpul Anyam",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-anyam.webp",
      utility: "Fungsi dari simpul anyam adalah untuk menyambung dua utas tali yang tidak sama besarnya dan dalam keadaan kering.",
      steps: [
        "Buatlah sosok pada ujung tali yang lebih besar (Seperti di gambar, tali berwarna biru)",
        "Masukkan ujung tali yang lebih kecil (dalam gambar warna merah) ke dalam sosok tali besar (biru) dari arah bawah keatas",
        "Belitkan ujung tali kecil (merah) di bawah tali berwarna biru",
        "Sisipkan ujung tali merah ke bawah badan tali itu sendiri (seperti gambar 3)"
      ]
    },
    {
      title: "Simpul Anyam Berganda",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-anyam-berganda.webp",
      utility: "kegunaan atau fungsi dari temali simpul anyaman berganda adalah untuk menyambung dua utas tali yang ukurannya tidak sama besar dan tidak licin."
    },
    {
      title: "Simpul Anyam Rantai",
      description: "",
      imageUrl: "/assets/tali-temali/anyam-rantai.webp",
      utility: "kegunaan dari temali anyaman rantai adalah untuk memendekkan tali."
    },
    {
      title: "Simpul Ujung Tali",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-ujung-tali.webp",
      utility: "Kegunaan dari temali simpul ujung tali ini adalah agar tali pintalan yang ada pada ujung tali tidak mudah lepas."
    },
    {
      title: "Simpul Tiang",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-tiang.webp",
      utility: "kegunaan temali simpul tiang adalah untuk mengikat benda hidup atau leher binatang tujuannya agar yang diikat tidak terjerat, dan untuk menambatkan tali pengikat binatang pada pohon supaya binatang itu bisa bergerak dengan bebas."
    },
    {
      title: "Simpul Kembar",
      description: "Tali temali dalam pramuka simpul nelayan, simpul kembar, simpul portugis, simpul inggris, merupakan gabungan dari dua buah simpul hidup pada masing-masing ujung dari dua utas tali. Sehingga tidak terlalu sulit jika kamu mau membuatnya.",
      imageUrl: "/assets/tali-temali/simpul-kembar.webp",
      utility: "Kegunaan dari temali simpul kembar adalah untuk menyambung dua utas tali yang sama besarnya bisa digunakan dalam keadaan basah atau licin."
    },
    {
      title: "Simpul Erat",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-erat.webp",
      utility: "untuk memendekkan tali tanpa harus memotongnya"
    },
    {
      title: "Simpul Tambat (Timber Hitch)",
      description: "Temali simpul tambat juga berfungsi sebagai awalan pada simpul-simpul yang lainnya, seperti simpul silang dan simpul palangj",
      imageUrl: "/assets/tali-temali/simpul-tambat.webp",
      utility: "Untuk memulai ikatan bisa juga digunakan untuk menyeret balok"
    },
    {
      title: "Simpul Penarik",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-penarik.webp",
      utility: "Untuk menarik suatu barang/benda yang ukurannya lumayan besar seperti batang pohon dll."
    },
    {
      title: "Simpul Gulung",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-gulung.webp",
      utility: "Untuk diikatkan pada tali penarik tujuannya agar orang lain bisa membantu menarik."
    },
    {
      title: "Simpul Kursi",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-kursi.webp",
      utility: "Untuk mengangkat atau menurunkan suatu benda atau orang pingsan."
    },
    {
      title: "Simpul Pengunci",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-pengunci.webp",
      utility: "Berfungsi untuk menghindari lepasnya ujung tali dari ikatan yang berbentuk lingkaran pada tali tersebut."
    },
    {
      title: "Simpul Prusik",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-prusik.webp",
      utility: "Sebagai pengganti alat ascendeur karena simpul ini pada awalnya  untuk menaiki tali kermantle yang lebih besar diameternya."
    },
    {
      title: "Simpul Tiang Berganda",
      description: "",
      imageUrl: "/assets/tali-temali/simpul-tiang-berganda.webp",
      utility: "Untuk mengangkat atau menurunkan suatu benda atau manusia."
    },
    {
      title: "Simpul Tangga Tali",
      description: "Fungsi temali dari simpul silang hampir sama dengan simpul palang akan tetapi, simpul silang lebih cepat dan lebih kuat dibanding dengan simpul palang",
      imageUrl: "/assets/tali-temali/simpul-tangga-tali.webp",
      utility: "Fungsi dari simpul ini tidak jauh dari namanya yakni untuk membuat tangga tali."
    },
  ]
}

export default  data
