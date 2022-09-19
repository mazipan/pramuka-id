/* eslint-disable no-undef */
export const isDev = process.env.NODE_ENV === 'development'
export const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || 'https://pramuka-id.vercel.app'
const basePath = BASE_URL

export const BASE_PATH = basePath || ''
export const BRAND_TITLE = 'Pramuka Online'
export const BRAND_LONG_DESC =
  'Kumpulan informasi digital mengenai berbagai materi pramuka, materi kenegaraan dan materi kecakapan umum'
