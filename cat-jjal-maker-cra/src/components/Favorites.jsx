import CatItem from "./CatItem";

function Favorites({ favorites, setFavorites, onDeleteClick }) {
  if (favorites.length === 0) {
    return <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>;
  }

  return (
    <ul className="favorites">
      {favorites.map((cat) => (
        <CatItem
          img={cat}
          key={cat}
          favorites={favorites}
          setFavorites={setFavorites}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </ul>
  );
}

export default Favorites;
