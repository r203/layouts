const ShopItem = ({item}) => {

  return (
    <div className="shopitem">
      <div className="shopitem__img"><img src={item.img} alt={item.name} /></div>
      <div className="shopitem__title">{item.name}</div>
      <div className="shopitem__variation">{item.color}</div>
      <div className="shopitem__price">${item.price}</div>
      <button className="shopitem__btn">ADD TO CARD</button>
    </div>
  )
}

export default ShopItem;