import {useState, useEffect} from 'react'

const useCardSize = (page) => {
  const [size, setSize] = useState({width: 0, height: 0})

  const horizontalPadding = 32

  useEffect(() => {
    const updateWindowDimensions = () => {
      const halfScreenSize = window.innerWidth / 2
      const cardSize = halfScreenSize - horizontalPadding

      setSize({width: cardSize, height: cardSize})
    }
    updateWindowDimensions()

    window.addEventListener("resize", updateWindowDimensions)

    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [horizontalPadding])

  return size
}

export default useCardSize