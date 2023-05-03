
import Buttons from './Buttons'
import "./styles/Message.css"



const Messages = ({quote, handleNewQuote}) =>{
  return (
    <section className='containerInfo'>
    <h1 className='container__title'>Galletas De La Fortuna</h1>

   <Buttons handleNewQuote={handleNewQuote} ></Buttons>
    <article className='containerInfo__phrase'>
      <p>{quote.phrase}</p>
    </article>
    
    <article className='containerInfo__author'>
      <h4>Fuente: {quote.author}</h4>
    </article>
  </section>
  )
}

export default Messages