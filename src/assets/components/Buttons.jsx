import React from 'react';
import "./styles/Buttons.css"

const Buttons = ({handleNewQuote}) => {
  return (
    <div>
      <button className='button' onClick={handleNewQuote}>Probar Suerte</button>;
    </div>
  )
};

export default Buttons;
