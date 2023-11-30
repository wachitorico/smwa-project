import hcdc1 from '../static/hcdc1.jpg'
import hcdc2 from '../static/hcdc2.jpg'
import hcdc3 from '../static/hcdc3.png'
import hcdc4 from '../static/hcdc4.png'

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hcdc1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hcdc2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hcdc3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hcdc4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;