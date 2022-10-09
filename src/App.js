import "./App.css";
import CardItem from "./component/cards/Card";
import Header from "./component/header/Header";
import NavBar from "./component/navbar/Navbar";
import data from "../src/helper/data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Header />
      </div>

      <div className="cards-style row">
        {data &&
          data.length > 0 &&
          data.map((card) => (
            <Col
              className="d-flex justify-content-center"
              xs={12}
              lg={4}
              md={6}
            >
              <CardItem
                id={card.id}
                image={card.image}
                title={card.title}
                desc={card.desc}
              />
            </Col>
          ))}
      </div>
    </>
  );
}

export default App;
