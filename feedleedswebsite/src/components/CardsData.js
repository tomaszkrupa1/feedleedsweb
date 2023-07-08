import "./CardsStyles.css";

function CardsData(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default CardsData;
