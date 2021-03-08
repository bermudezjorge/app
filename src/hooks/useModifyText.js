import {useState, useEffect} from 'react'

const maxLength = 25

const useModifyText = (text) => {
  const [textMod, setTextMod] = useState(text)

  useEffect(() => {
    const textLength = text.length
    console.log(textLength)

    if(textLength > maxLength) {
      setTextMod(text.substr(0, maxLength) + '...')
    } else {
      setTextMod(text)
    }

  }, [text])

  return textMod
}

export default useModifyText