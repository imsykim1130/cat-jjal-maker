import React from "react";
import Title from "./components/Title";
import MainCard from "./components/MainCard";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import "./App.css";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const App = () => {
  const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";

  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter");
  });
  const [mainCat, setMainCat] = React.useState(CAT1);
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });

  const alreadyFavorite = favorites.includes(mainCat);

  async function setInitCat() {
    const newCat = await fetchCat("First cat");
    setMainCat(newCat);
  }

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);
    setMainCat(newCat);
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }

  function handelHeartClick() {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  function handleDeleteClick(index) {
    favorites.splice(index, 1);
    setFavorites([...favorites]);
    jsonLocalStorage.setItem("favorites", favorites);
  }

  React.useEffect(() => {
    setInitCat();
  }, []);

  return (
    <div className="App">
      <Title>고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard
        img={mainCat}
        onHeartClick={handelHeartClick}
        alreadyFavorite={alreadyFavorite}
      />
      <Favorites
        favorites={favorites}
        setFavorites={setFavorites}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;
