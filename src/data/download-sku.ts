export interface DownloadSKU {
  data: {
    title: string
    key: string
  }[]
  types: string[]
  sku: {
    siaga: string
    penggalang: string
    penegak: string
    pandega: string
  }
  panduan: {
    siaga: string
    penggalang: string
    penegak: string
    pandega: string
  }
}

const data: DownloadSKU = {
  data: [
    {
      title: 'Buku SKU',
      key: 'sku'
    },
    {
      title: 'Buku Panduan SKU',
      key: 'panduan'
    }
  ],
  types: ['siaga', 'penggalang', 'penegak', 'pandega'],
  sku: {
    siaga: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgdXhBcWxZX1lUVjg/view',
    penggalang: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgS1BvYlNtbW1DYmc/view',
    penegak: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgaG1TRGloNWJhbzg/view',
    pandega: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgaG1TRGloNWJhbzg/view'
  },
  panduan: {
    siaga: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgSEREVHJGVDJWUTQ/view',
    penggalang: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgRzBLTlo5bk5RcDQ/view',
    penegak: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgQ3pYdWV6T2V4N3M/view',
    pandega: 'https://drive.google.com/file/d/0Bw9eKTeTmqjgUnozZ2NWRUEzaXM/view'
  }
}

export default data
