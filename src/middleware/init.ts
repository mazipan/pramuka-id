export default function initMiddleware(
  middleware: (_: any, __: any, ___: (___: any) => void) => void
) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
