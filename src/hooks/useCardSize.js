import {useState, useEffect} from 'react'

import {BREAKPOINTS} from 'constants/breakpoints'

const useCardSize = () => {
  const [size, setSize] = useState({width: 0, height: 0})

  const horizontalPadding = 48

  useEffect(() => {
    const updateSize = () => {
      const screenSize = window.innerWidth
      const halfScreenSize = screenSize / 2
      const cardSize = halfScreenSize - horizontalPadding

      // const getObjKey = obj => Object.keys(obj)[0]

      for(let i = 0; BREAKPOINTS.length - 1 > i; i++) {
        if(BREAKPOINTS[i] < screenSize) {
          console.log(BREAKPOINTS[i])
          break;
        }
      }

      setSize({width: cardSize, height: cardSize})
    }
    updateSize()

    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [horizontalPadding])

  return size
}

export default useCardSize