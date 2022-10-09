import { Card } from "react-bootstrap";
import "./Card.css";

function CardItem(props) {
  const { id, title, desc, image } = props;
  console.log("id :>> ", id);
  return (
    <Card style={{ width: "35rem", padding: "1rem" }}>
      <Card.Img className="card-img" variant="top" src={image} alt="img1" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
