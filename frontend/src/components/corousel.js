import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../images/creepy.jpg'

export const HomeCorousel= () =>{

    return (
        <>
<Carousel >
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={first}
      alt="First slide"
      height='490em'
    />
    <Carousel.Caption>
    <h1>Welcome to Small Channel Shootout!</h1>
        <h2 style={{color:'white'}}>Begin exploring by searching for your favorite videos above.</h2>
        <br/>
       
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={first}
      alt="Second slide"
      height='490em'
    
    />
    <Carousel.Caption>
    <h4>
                Any content you search for will have been created by a "small creator". After creating an account, you'll be able to
                vote on your favorite videos each week and see the results of that vote at our Best Choice page.
            </h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100 "
      src={first}
      alt="Third slide"
      height='490em'

    />
    <Carousel.Caption>
    <h1 style={{color:'white'}}>See your videos below!</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
}; 