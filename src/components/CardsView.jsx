import ShopCard from "./ShopCard"
const CardsView = ({cards}) => {

  return (
    <div className="cardsview">
      {cards.map((card, index) => {
        return <ShopCard
          key={index.toString()}
          card={card} />
      })}
    </div>
  )
}

export default CardsView;