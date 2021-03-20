import {useState, useEffect} from 'react'

const maxLength = 23

const useModifyText = (text) => {
  const [textMod, setTextMod] = useState(text)

  useEffect(() => {
    if(text.length > maxLength) {
      setTextMod(text.substr(0, maxLength) + '~')
    } else {
      setTextMod(text)
    }

  }, [text])

  return textMod
}

export default useModifyText