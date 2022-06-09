const express = require("express");
const app = express();
let word = "something";
let guessedWord = Array(9).fill("_");
const hangmanGame = [
  ` 
      +---+
      |   |
          |
          |
          |
          |
    =========`,

  ` 
      +---+
      |   |
      O   |
          |
          |
          |
    =========`,

  ` 
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========`,

  ` 
      +---+
      |   |
      O   |
     /|\\ |
          |
          |
    =========`,

  ` 
      +---+
      |   |
      O   |
     /|\\ | 
          |
     / \\ |
          |
    =========`,
];
let hangedman = 0;

app.get("/", (req, res) =>
  res.send(`<div style='text-align:center;'>
  <h2 >Start Guessing</h2>
<h1 >${guessedWord}</h1>
<h1 >${guessedWord.includes("_") != true ? "Congrats You Got It" : ""}</h1>
<div style='white-space: pre-wrap;' >${hangmanGame[hangedman]}</div>
<h1 >${hangedman == 4 ? "YOU ARE HANGED" : ""}</h1>
</div>
`)
);

app.post("/guess/:char", (req, res) => {
  const guessedLetter = req.params.char;
  if (word.includes(guessedLetter)) {
    guessedWord[word.indexOf(guessedLetter)] = guessedLetter;
    res.send("great you got one");
  } else {
    hangedman++;
    res.send("letter guess was incorrect");
  }
});

app.listen(3000, () => console.log("express is listening on port 3000"));
