import React from "react";
import "./index.css";

import SearchSelection from "../../components/SearchSelection";

function Index() {


  return (
    <div className="index__container">
      <div className="index__container-components">
        <div className="index__header">
          <h1 className="header__title">Pokedex</h1>
        </div>
        <div className="index__screen">
          <SearchSelection />
        </div>
      </div>
    </div>
  );
}

export default Index;
