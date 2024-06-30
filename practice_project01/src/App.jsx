import React from 'react'

function App() {


  function handleClick(){
        let randomNum  = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt("type a number");
        console.log(userInput);
        alert(`Number: ${randomNum}, your Guess: ${userInput}`);
  }
  return (
    <div>
     <h1> Task: Add a button and handle a click event</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Guess the Number Between 1 and 3</button>

    </div>
  )
}

export default App