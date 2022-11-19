const ShopCard = ({ card }) => {

  return (
    <div className="shopcard">
      <div className="shopcard__header">
        <div className="shopcard__title">{card.name}</div>
        <div className="shopcard__variation">{card.color}</div>
      </div>
      <div className="shopcard__body">
        <div className="shopcard__img"><img src={card.img} alt={card.name} /></div>
      </div>
      <div className="shopcard__footer">
        <div className="shopcard__price">${card.price}</div>
        <button className="shopcard__btn">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopCard;