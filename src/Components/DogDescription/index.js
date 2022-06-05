import { useParams } from "react-router-dom";
import { data } from "../Adoption";
export default function DogDescription() {
  const params = useParams();
  console.log("params:", params);
  const doggie = data.find((dog) => dog.id === params.id);
  return (
    <div>
      <h2> Dog Description... </h2>
      <h3> {doggie.Breed} </h3>
      <img alt="dog" src={doggie.image} width="200" />
      <h4> {doggie.description} </h4>
      <h4> {doggie.Color} </h4>
      <h5> {doggie["Rescued From"]} </h5>
    </div>
  );
}
