import ListingCard from "./ListingCard";

const ListOfListings = ({ cards }) => {
  return (
    <>
      {cards
        ? cards.map((card) => {
            let tempArray = [
              card.distance_1,
              card.distance_2,
              card.distance_3,
              card.distance_4,
              card.distance_5,
            ];
            let minNumber = tempArray.reduce(
              (accumulatedValue, currentValue, index) =>
                Math.min(accumulatedValue, currentValue)
            );
            const asArray = Object.entries(card).filter(
              ([key, value]) => value === minNumber
            );
            return <ListingCard card={card} asArray={asArray} />;
          })
        : null}
    </>
  );
};

export default ListOfListings;
