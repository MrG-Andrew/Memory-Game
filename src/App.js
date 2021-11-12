import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/g2.jpg", "name": "luffy gear second"},
  { "src": "/img/luffylucci.png", "name":"luffy vs lucci"},
  { "src": "/img/sanji.png", "name":"sanji"},
  { "src": "/img/usopp.jpg", "name":"soge king"},
  { "src": "/img/youngluffy.jpg", "name":"young luffy"},
  { "src": "/img/zoro.jpg", "name":"zoro"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiseOne,setChoiceOne] = useState(null)
  const [choiseTwo,setChoiceTwo] = useState(null)

  //shuffle cards
  const shuffleCards = ()=> {
    const shuffledCards = [...cardImages,...cardImages]
      .sort(()=>Math.random() - 0.5)
      .map((card)=> ({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle choice
  const handleChoice = (card)=>{
    choiseOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  
  return (
    <div className="App">
        <h1>Memory Game</h1>
        <button onClick = {shuffleCards}>New Game</button>
        <div className="card-grid">
            {cards.map((card) => (
              <SingleCard 
                key = {card.id} 
                card = {card}
                handleChoice = {handleChoice}
              />
            ))}
        </div>
  </div>
  );
}

export default App;
