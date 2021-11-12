import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/g2.jpg", "name": "luffy gear second", matched: false},
  { "src": "/img/luffylucci.png", "name":"luffy vs lucci", matched: false},
  { "src": "/img/sanji.png", "name":"sanji", matched: false},
  { "src": "/img/usopp.jpg", "name":"soge king", matched: false},
  { "src": "/img/youngluffy.jpg", "name":"young luffy", matched: false},
  { "src": "/img/zoro.jpg", "name":"zoro", matched: false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne,setChoiceOne] = useState(null)
  const [choiceTwo,setChoiceTwo] = useState(null)

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
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    
  }

  //compare 2 selected cards
  useEffect(()=>{
    if(choiceOne && choiceTwo){

      if(choiceOne.name === choiceTwo.name){
        setCards(previousCards => {
          return previousCards.map(card => {
            if(card.name === choiceTwo.name){
              return{...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        setTimeout(()=> resetTurn(),1000)
      }
    
    }
  },[choiceOne,choiceTwo])


 


  //reset choices and increase turn by 1
  const resetTurn = ()=>{
    setChoiceOne(null);
    setChoiceTwo(null)
    setTurns(previousTurns => previousTurns +1)
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
                flipped={card === choiceTwo || card === choiceOne || card.matched}
              />
            ))}
        </div>
        <br />
        <div><strong>Turns: <i>{turns}</i></strong></div>
  </div>
  );
}

export default App;
