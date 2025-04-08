export default function Product(card) {
  return (
    <div className="h-28 bg-indigo-50 rounded-lg">
      <div className="flex flex-col items-center gap-y-4 bg-indigo-100 rounded-lg shadow-md hover:shadow-2xl hover:bg-indigo-200 transition-all duration-300 p-4 w-36 h-40 transform hover:scale-105">
        {card.name}
        <img src={card.image} className="w-20 h-20 rounded-full" alt="pic" />
        {card.description}
        {card.price}
        {card.category}
        {card.quantityAvailable}
      </div>
    </div>
    //name
  );
}
