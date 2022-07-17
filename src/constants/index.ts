// eslint-disable-next-line
const isDev = process.env.NODE_ENV === 'development'
const basePath = isDev ? 'http://localhost:3000' : 'https://pramuka.online'

export const BASE_PATH = basePath || ''
export const BRAND_TITLE = 'Pramuka.Online'
export const BRAND_LONG_DESC =
  'Kumpulan informasi digital mengenai berbagai materi pramuka, materi kenegaraan dan materi kecakapan umum'
