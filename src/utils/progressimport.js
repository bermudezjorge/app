import {lazy} from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const DELAY_TIME = 1000

const progressImport = (fn) => (
  lazy(() =>
    new Promise(resolve => {
      nprogress.start()

      setTimeout(() => {
        nprogress.done()

        return resolve(fn)
      }, DELAY_TIME)
    })
  )
)
  

export default progressImport