import {createElement} from 'react'
import styles from './style.module.css'

const keyHasType = (key, type) => key.indexOf(type) !== -1

const typeOfTextElementByType = type => {
  const textTagsByType = {
    'fallback profileName price': 'h1',
    'storeData': 'h2',
    'groupMessage': 'h3',
    'description': 'p'
  }
  
  for(const key in textTagsByType) {
    if(keyHasType(key, type))
			return textTagsByType[key]   
  }

  return 'p'
}

const Text = ({type, children}) => (
  createElement(
    typeOfTextElementByType(type), 
    {
      className: styles[type],
      children
    }
  )
)

export default Text