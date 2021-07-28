export interface TepukPramukaGroup {
  text: string
  lists: string[]
}

export interface TepukPramukaSection {
  name: string
  description: string
  groupType: string
  groups: TepukPramukaGroup[]
}

export interface TepukPramuka {
  title: string
  subtitle: string
  description: string
  source: string
  meaning: string
  sections: TepukPramukaSection[]
}

const data: TepukPramuka = {
  title: 'Materi Kecakapan Umum',
  subtitle: 'Tepuk Pramuka',
  description: 'Macam-macam tepuk pramuka dan cara melakukannya',
  source: 'https://spewehascouter.blogspot.com/2018/11/1000-macam-tepuk-pramuka-siaga.html',
  meaning:
    'Tepuk Pramuka Dalam materi pelajaran pramuka siaga maupun penggalang sangat bermacam macam. Tepuk pramuka juga di ajarkan di sekolah taman kanak kanak (TK)  dan Sekolah Dasar (SD) sebagai game pelajaran agar anak anak tidak jenuh saat belajar.',
  sections: [
    {
      name: 'Macam-macam Tepuk Pramuka Siaga',
      description:
        'Daftar macam tepuk pramuka yang bisa dipelajari atau dijadikan sebagai bahan untuk diajarkan ke anak didik anda',
      groupType: 'object',
      groups: [
        {
          text: 'Tepuk Empat Kali',
          lists: [
            'Tepuk 1 Kali - satu',
            'Tepuk 1 Kali - dua',
            'Tepuk 1 Kali - tiga',
            'Tepuk 1 Kali - empat',
            'Kaki rapat, tangan di lipat, mulut di kunci, cekrek'
          ]
        },
        {
          text: 'Tepuk Prestasi',
          lists: [
            'Tepuk 1 Kali - satu',
            'Tepuk 2 Kali - satu dua',
            'Tepuk 3 Kali - satu dua tiga',
            'Tepuk 4 Kali - satu dua tiga empat ... .Bisa, bisa Yess'
          ]
        },
        {
          text: 'Tepuk Anak Pintar',
          lists: [
            'Tepuk 3 Kali - Aku anak pintar',
            'Tepuk 3 Kali - Tidak Boleh nakal',
            'Tepuk 3 Kali - Patuh orang tua',
            'Tepuk 3 Kali - patuh guru kita ... Oyeah.'
          ]
        },
        {
          text: 'Tepuk Diam',
          lists: [
            'Tepuk 3 Kali - Bila aku',
            'Tepuk 3 Kali - Sudah tepuk',
            'Tepuk 3 Kali - maka aku',
            'Tepuk 3 Kali - harus diam ... One, two, three, four Yes'
          ]
        },
        {
          text: 'Tepuk Becak',
          lists: [
            'Tepuk 3 Kali - Genjot kanan',
            'Tepuk 3 Kali - Genjot kiri',
            'Tepuk 3 Kali - Genjot kanan genjot kiri ter . . ter'
          ]
        },
        {
          text: 'Tepuk Rapi',
          lists: [
            'Tepuk 3 Kali - Rapi Kanan',
            'Tepuk 3 Kali - Rapi kiri',
            'Tepuk 3 Kali - Rapi semuanya ... Yess'
          ]
        },
        {
          text: 'Tepuk Nyamuk',
          lists: [
            'Tepuk 3 Kali - Uweng uweng',
            'Tepuk 3 Kali - Uweng uweng',
            'Tepuk 3 Kali - Uweng uweng uweng uweng ... clep .. aahhh'
          ]
        },
        {
          text: 'Tepuk Islam',
          lists: [
            'Tepuk 3 Kali - Tuhanku',
            'Tepuk 3 Kali - Allah',
            'Tepuk 3 Kali - Kitabku',
            'Tepuk 3 Kali - Al Qur’an',
            'Tepuk 3 Kali - Nabiku',
            'Tepuk 3 Kali - Muhammad',
            'Tepuk 3 Kali - Agamaku',
            'Tepuk 3 Kali - Islam'
          ]
        },
        {
          text: 'Tepuk Cinta',
          lists: [
            'Tepuk 3 Kali - Pertama aku cinta pada Allah',
            'Tepuk 3 Kali - Kedua aku cinta Rasullullah',
            'Tepuk 3 Kali - Ketiga Aku cinta kepada Ayah Bunda, semoga aku masuk surga',
            'Tepuk 3 Kali - Amin, amin, Yess'
          ]
        },
        {
          text: 'Tepuk Anak Soleh',
          lists: [
            'Tepuk 3 Kali - Aku',
            'Tepuk 3 Kali - Anak Soleh',
            'Tepuk 3 Kali - rajin sholat',
            'Tepuk 3 Kali - Rajin ngaji',
            'Tepuk 3 Kali - Orang tua',
            'Tepuk 3 Kali - Dihormati',
            'Tepuk 3 Kali - Cinta Islam',
            'Tepuk 3 Kali - sampai mati ... Laillahailallah Muhammaddarusulullah ... Islam Islam Yess'
          ]
        },
        {
          text: 'Tepuk Wudlu',
          lists: [
            'Tepuk 3 Kali - Kumur-kumur basuh muka basuh tangan',
            'Tepuk 3 Kali - kepala dan telinga terakhir cuci kaki lalu doa',
            'Tepuk 3 Kali - yess'
          ]
        },
        {
          text: 'Tepuk Badut',
          lists: [
            'Tepuk 3 Kali - mata besar',
            'Tepuk 3 Kali - hidung tomat',
            'Tepuk 3 Kali - perut gendut',
            'Tepuk 3 Kali - goyang-goyang'
          ]
        },
        {
          text: 'Tepuk Ondel-ondel',
          lists: [
            'Tepuk 3 Kali - Ondel-ondel',
            'Tepuk 3 Kali - badan besar',
            'Tepuk 3 Kali - rambut jagung',
            'Tepuk 3 Kali - kalau jalan',
            'Tepuk 3 Kali - timplang timplung timplang timplung'
          ]
        },
        {
          text: 'Tepuk Ayam',
          lists: [
            'Tepuk 3 Kali - piyik-piyik',
            'Tepuk 3 Kali - Petok-petok',
            'Tepuk 3 Kali - Kukuruyuk'
          ]
        },
        {
          text: 'Tepuk Kambing',
          lists: [
            'Tepuk 3 Kali - mbek embek',
            'Tepuk 3 Kali - embek embek',
            'Tepuk 3 Kali - mbeeeek'
          ]
        },
        {
          text: 'Tepuk Ikan',
          lists: [
            'Tepuk 3 Kali - berenang',
            'Tepuk 3 Kali - cari makan',
            'Tepuk 3 Kali - sudah kenyang',
            'Tepuk 3 Kali - diam'
          ]
        },
        {
          text: 'Tepuk sate',
          lists: [
            'Tepuk 3 Kali - di iris-iris',
            'Tepuk 3 Kali - disunduki',
            'Tepuk 3 Kali - dibakar',
            'Tepuk 3 Kali - Sate'
          ]
        },
        {
          text: 'Tepuk tempe',
          lists: [
            'Tepuk 3 Kali - di idak-idak',
            'Tepuk 3 Kali - dibunteli',
            'Tepuk 3 Kali - di dol'
          ]
        },
        {
          text: 'Tepuk empat sehat lima sempurna',
          lists: [
            'Tepuk 3 Kali - nasi',
            'Tepuk 3 Kali - lauk pauk',
            'Tepuk 3 Kali - sayuran',
            'Tepuk 3 Kali - buah-buahan',
            'Tepuk 3 Kali - susu'
          ]
        },
        {
          text: 'Tepuk Panca Indra',
          lists: [
            'Tepuk 3 Kali - mata',
            'Tepuk 3 Kali - hidung',
            'Tepuk 3 Kali - telinga',
            'Tepuk 3 Kali - lidah',
            'Tepuk 3 Kali - kulit'
          ]
        },
        {
          text: 'Tepuk Mata',
          lists: ['Tepuk 3 Kali - lirik kanan', 'Tepuk 3 Kali - lirik kiri', 'Tepuk 3 Kali - mata']
        },
        {
          text: 'Tepuk tanaman',
          lists: [
            'Tepuk 3 Kali - akar',
            'Tepuk 3 Kali - batang',
            'Tepuk 3 Kali - daun',
            'Tepuk 3 Kali - bunga',
            'Tepuk 3 Kali - buah'
          ]
        },
        {
          text: 'Tepuk Mobil',
          lists: [
            'Tepuk 3 Kali - naik mobil',
            'Tepuk 3 Kali - pegang setir',
            'Tepuk 3 Kali - tekan klakson',
            'Tepuk 3 Kali - din din din'
          ]
        },
        {
          text: 'Tepuk telepon',
          lists: [
            'Tepuk 3 Kali - kring kring kring kring',
            'Tepuk 3 Kali - kring kring kring kring',
            'Tepuk 3 Kali - Hallo'
          ]
        },
        {
          text: 'Tepuk Huruf vokal',
          lists: [
            'Tepuk 3 Kali - a',
            'Tepuk 3 Kali - i',
            'Tepuk 3 Kali - u',
            'Tepuk 3 Kali - e',
            'Tepuk 3 Kali - o'
          ]
        },
        {
          text: 'Tepuk Rasa',
          lists: [
            'Tepuk 3 Kali - ada asam',
            'Tepuk 3 Kali - ada asin',
            'Tepuk 3 Kali - ada manis',
            'Tepuk 3 Kali - ada pahit',
            'Tepuk 3 Kali - macam-macam rasa'
          ]
        },
        {
          text: 'Tepuk keluarga',
          lists: [
            'Tepuk 3 Kali - ada ayah',
            'Tepuk 3 Kali - ada ibu',
            'Tepuk 3 Kali - ada kakak',
            'Tepuk 3 Kali - ada adik',
            'Tepuk 3 Kali - keluarga'
          ]
        },
        {
          text: 'Tepuk Tertawa huruf vokal',
          lists: [
            'Tepuk 3 Kali - ha ha ha ha',
            'Tepuk 3 Kali - hi hi hi hi',
            'Tepuk 3 Kali - hu hu hu hu',
            'Tepuk 3 Kali - he he he he',
            'Tepuk 3 Kali - ho h ho ho'
          ]
        },
        {
          text: 'Tepuk Pilot',
          lists: [
            'Tepuk 3 Kali - aku',
            'Tepuk 3 Kali - anak sehat',
            'Tepuk 3 Kali - belajar',
            'Tepuk 3 Kali - dengan giat',
            'Tepuk 3 Kali - sudah besar',
            'Tepuk 3 Kali - jadi pilot'
          ]
        },
        {
          text: 'Tepuk anak Indonesia',
          lists: [
            'Tepuk 3 Kali - aku',
            'Tepuk 3 Kali - anak Indonesia',
            'Tepuk 3 Kali - tanah air',
            'Tepuk 3 Kali - kubanggakan',
            'Tepuk 3 Kali - cinta damai',
            'Tepuk 3 Kali - selamanya'
          ]
        },
        {
          text: 'Tepuk Indonesia',
          lists: [
            'Tepuk 3 Kali - Indonesia',
            'Tepuk 3 Kali - Tanah Airku',
            'Tepuk 3 Kali - Indonesia Raya',
            'Tepuk 3 Kali - Lagu kebangsaanku',
            'Tepuk 3 Kali - Garuda',
            'Tepuk 3 Kali - Lambang negaraku',
            'Tepuk 3 Kali - Pancasila',
            'Tepuk 3 Kali - Dasar negaraku',
            'Tepuk 3 Kali - Itulah Indonesiaku'
          ]
        },
        {
          text: 'Tepuk Monyet',
          lists: [
            'Tepuk 3 Kali - Loncat Kanan',
            'Tepuk 3 Kali - Loncat Kiri',
            'Tepuk 3 Kali - Loncat kanan loncat kiri ... kayak kamu ...'
          ]
        },
        {
          text: 'Tepuk Merdeka',
          lists: [
            'Tepuk 3 Kali - tujuhbelas',
            'Tepuk 3 Kali - agustus',
            'Tepuk 3 Kali - empat lima',
            'Tepuk 3 Kali - merdeka'
          ]
        },
        {
          text: 'Tepuk Pulau Indonesia',
          lists: [
            'Tepuk 3 Kali - ada Jawa',
            'Tepuk 3 Kali - ada sumatra',
            'Tepuk 3 Kali - ada kalimantan',
            'Tepuk 3 Kali - ada Sulawesi',
            'Tepuk 3 Kali - dan Papua',
            'Tepuk 3 Kali - itulah Indonesia ... Yess'
          ]
        },
        {
          text: 'Tepuk Pelangi',
          lists: [
            'Tepuk 3 Kali - merah',
            'Tepuk 3 Kali - jingga',
            'Tepuk 3 Kali - kuning',
            'Tepuk 3 Kali - hijau',
            'Tepuk 3 Kali - biru',
            'Tepuk 3 Kali - nila',
            'Tepuk 3 Kali - ungu',
            'Tepuk 3 Kali - mejikuhibiniu'
          ]
        },
        {
          text: 'Tepuk Pramuka',
          lists: ['Tepuk 3 Kali', 'Tepuk 3 Kali', 'Tepuk 7 Kali']
        },
        {
          text: 'Tepuk alam semesta',
          lists: [
            'Tepuk 3 Kali - ada bumi',
            'Tepuk 3 Kali - ada bulan',
            'Tepuk 3 Kali - ada matahari',
            'Tepuk 3 Kali - ada bintang',
            'Tepuk 3 Kali - ada komet',
            'Tepuk 3 Kali - ada planet',
            'Tepuk 3 Kali - alam semesta',
            'Tepuk 3 Kali - ciptaan TuhanYesss'
          ]
        }
      ]
    }
  ]
}

export default data
