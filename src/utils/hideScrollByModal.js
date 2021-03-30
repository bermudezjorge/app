const BODY = document.body

const hideScrollByModal = (hide) => {
  if(hide) {
    BODY.style.overflowY = 'hidden'
  } else {
    BODY.style.overflowY = 'scroll'
  }    
}

export default hideScrollByModal