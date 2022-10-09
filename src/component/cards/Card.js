import { Card } from "react-bootstrap";
import "./Card.css";

function CardItem(props) {
  const { id, title, desc, image } = props;
  console.log("id :>> ", id);
  return (
    <Card style={{ width: "35rem", padding: "1rem" }}>
      <Card.Body className="body">
        <Card.Img className="card-img" variant="top" src={image} alt="img1" />
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="text">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
