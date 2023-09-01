function GuessNum() {
    function handleClick() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div>
      <button onClick={handleClick}>Guess the number between 1 and 10</button>
    </div>
  );
}

export default GuessNum;