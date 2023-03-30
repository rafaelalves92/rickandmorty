import { ICharacter } from "../../interfaces/character.interface";
import "./styles.scss";

const CharacterCard = (char: ICharacter) => {
  return (
    <div className="main-card">
      <div className="img-div">
        <img src={char.image} />
      </div>
      <div className="text-div">
        <p className="name">
          Name: <span>{char.name}</span>
        </p>
        <p>
          Status:{" "}
          <span
            className={
              char.status == "Alive"
                ? "green"
                : char.status == "Dead"
                ? "red"
                : undefined
            }
          >
            {char.status}
          </span>
        </p>
        <p>
          Species: <span>{char.species}</span>
        </p>
        <p>
          Gender: <span>{char.gender}</span>
        </p>
        <p>
          Origin: <span>{char.origin.name}</span>
        </p>
        <p>
          Location: <span>{char.location.name}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
