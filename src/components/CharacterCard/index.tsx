import { useState } from "react";
import Rick from "../../assets/rick.jpeg";
import "./styles.scss";

const CharacterCard = () => {
  return (
    <div className="main-card">
      <div className="img-div">
        <img src={Rick} />
      </div>
      <div className="text-div">
        <p>
          Name: <span>Rick Sanchez</span>
        </p>
        <p>
          Status: <span className="green">Alive</span>
        </p>
        <p>
          Species: <span>Human</span>
        </p>
        <p>
          Gender: <span>Male</span>
        </p>
        <p>
          Origin: <span>Earth (C-137)</span>
        </p>
        <p>
          Location: <span>Citadel of Ricks</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
