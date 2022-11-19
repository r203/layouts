import ShopItem from "./ShopItem";

const ListView = ({ items }) => {

  return (
    <div>
      {items.map((item, index) => {
        return <ShopItem
          key={index.toString()}
          item={item} />
      })}
    </div>
  )
}

export default ListView;