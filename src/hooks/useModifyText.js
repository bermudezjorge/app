import {useState, useEffect} from 'react'

const useModifyText = (text, size) => {
  const [textMod, setTextMod] = useState(text)

  useEffect(() => {
    const textLength = text.length
    const containerWidth = size.width
    const maxLengthByWidth = Math.floor(containerWidth / 6)
  
    if(textLength > maxLengthByWidth) 
      setTextMod(text.substr(0, maxLengthByWidth) + '...')
      
  }, [text, size])

  return textMod
}

export default useModifyText