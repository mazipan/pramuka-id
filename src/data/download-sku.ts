export interface DownloadSkuLevels {
  siaga: string
  penggalang: string
  penegak: string
  pandega: string
}
export interface DownloadSkuData {
  title: string
  key: string
}
export interface DownloadSku {
  data: DownloadSkuData[]
  types: string[]
  sku: DownloadSkuLevels
  panduan: DownloadSkuLevels
}

const data: DownloadSku = {
  data: [
    {
      title: 'Buku SKU',
      key: 'sku'
    },
    {
      title: 'Buku Panduan Penyelesaian SKU',
      key: 'panduan'
    }
  ],
  types: ['siaga', 'penggalang', 'penegak', 'pandega'],
  sku: {
    siaga: 'https://ksana.in/sku-siaga',
    penggalang: 'https://ksana.in/sku-penggalang',
    penegak: 'https://ksana.in/sku-penegak',
    pandega: 'https://ksana.in/sku-pandega'
  },
  panduan: {
    siaga: 'https://ksana.in/penyelesaian-sku-siaga',
    penggalang: 'https://ksana.in/penyelesaian-sku-penggalang',
    penegak: 'https://ksana.in/penyelesaian-sku-penegak',
    pandega: 'https://ksana.in/penyelesaian-sku-pandega'
  }
}

export default data
