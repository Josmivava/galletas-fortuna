import { useState } from 'react'
import './App.css'
import Messages from './assets/components/Messages'
import db from  './assets/data/db.json'


const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const getRandomItem = (listItems) => {
  const indexRandom = Math.floor(Math.random()*listItems.length)
  return listItems[indexRandom]
  }

  const [quote, setQuote] = useState (getRandomItem(db)) 
  const [bgImage, setbgImage] = useState(getRandomItem(images))
 
  const handleNewQuote = () => {
  setQuote(getRandomItem(db))
  setbgImage(getRandomItem(images))
  }
  return (
    <>
      <div className={`App ${bgImage}`}>
        <Messages quote={quote}handleNewQuote={handleNewQuote} />

        {/* <img src="/imagenes/maras.jpg" alt="" /> */}      
      </div>

    </>
  )
}

export default App
