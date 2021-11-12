import "./SingleCard.css"

const SingleCard = ({card, handleChoice, flipped}) => {

    const handleClick = ()=>{
        handleChoice(card)
    }

    return (  
        <div className = "card">
            <div className = {flipped ? "flipped":""}>
                <img className="front" src={card.src} alt={card.name} />
                <img 
                    className = "back" 
                    src="/img/cover.jpg" 
                    alt="card back"
                    onClick = {handleClick} 
                />

            </div>
        </div>
    );
}
 
export default SingleCard;