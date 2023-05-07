import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import PostFocus from "./components/PostFocus";
import dogs from "./data/dogs";
import { useState } from "react";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onDogOpenClick(theDog) {
    setSelectedDog(theDog);
  }

  function onDogCloseClick() {
    setSelectedDog(null);
  }
  const filteredDogs = dogs.filter((dog) => {
    return dog.title.toLowerCase().includes(searchText.toLowerCase());
  });
  const dogElements = filteredDogs.map((dog, index) => {
    return <Content key={index} dog={dog} onDogClick={onDogOpenClick} />;
  });

  let dogPost = null;

  if (!!selectedDog) {
    dogPost = <PostFocus dog={selectedDog} onBgClick={onDogCloseClick} />;
  }
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <AppSearch value={searchText} onValueChange={setSearchText} />
      {/* <button className="btn" onClick={() => setSelectedDog(key)}>
        Your Dog of the Day
      </button> */}
      <main className="content-items">{dogElements}</main>
      {dogPost}
    </>
  );
}

export default App;
