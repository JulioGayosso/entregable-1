import React, { useState } from 'react';
import quotes from './quotes.json';

const QuoteBox = () => {
    const colors = ["yellow", "red", "blue", "gray", "purple", "orange", "brown", "pink"];
    const random = Math.floor(Math.random() * quotes.length);
    const random2 = Math.floor(Math.random() * colors.length);
    const[ quote , setQuote ] = useState(random);
    const [color, setColor] = useState(random2);
    const changeQuote = () =>{
        setQuote(Math.floor(Math.random () * quotes.length))
        setColor(colors[Math.floor(Math.random () * colors.length)])
    };
    document.body.style = `background: ${color}`;
    return (
        <div className='card'>
            <i  style={{color: color}} class="fa-solid fa-quote-left"></i>
            <article style={{color: color}}>
                <p>{quotes[quote].quote}</p>
                <p>{quotes[quote].author}</p>
                <div onClick={changeQuote} style={{backgroundColor: color}}></div>
            </article>
        </div>
    );
};
export default QuoteBox;