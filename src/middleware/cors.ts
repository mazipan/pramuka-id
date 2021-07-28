import corsMiddleware from 'cors'
import initMiddleware from './init'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  corsMiddleware({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'OPTIONS']
  })
)

export default cors
