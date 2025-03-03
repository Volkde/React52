import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import "./styles.css";
import { lionData, zebraData, hippoData } from "./data";
function Lesson03() {
  return (
    <div className="lesson03-wrapper">
      <AnimalCard
        animalName={lionData.name}
        animalSpecies={lionData.species}
        animalImg={lionData.image}
      />
      <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImg={zebraData.image}
      />
      <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImg={hippoData.image}
      />
      {/* при вызове компонента Button передаётся значение для свойства name объекта props */}
      <Button name="Send data" />
      <Button name="GET" />
      <Button />
    </div>
  );
}
export default Lesson03;