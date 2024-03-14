import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
  return (

    <Carousel fade>
      <Carousel.Item>
        <h3>Bloodborne</h3>
        <p>Welcome to the mini Bloodborne wiki.</p>
        <img src="https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/02/20/a8851326-dfd0-47f1-9f85-2a6aae5f7930/bloodborne-screenshot" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2c91a090d31d0c6f8e839d98eb1324b6.jpg" />
        <Carousel.Caption>
          <h3>About</h3>
          <p>Bloodborne is a 2015 action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4 (Wikipedia) Initial release date: March 24, 2015</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2c91a090d31d0c6f8e839d98eb1324b6.jpg" />
        <Carousel.Caption>
          <h3>Platform Details</h3>
          <p>
            Composers: Yuka Kitamura, Tsukasa Saitoh, Cris Velasco, Ryan Amon, Nobuyoshi Suzuki, Michael Wandmacher
            Platform: PlayStation 4
            Developer: FromSoftware Inc.
            Genres: Action role-playing game, Fighting game, Action-adventure game, Survival horror
            Mode: Multiplayer video game
            Awards: British Academy Games Award for Game Design.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default HomePage;