import React from 'react';
import './Home.css';
import image from './image.jpg'; 

const Home = () => {
  return (
    <div className='home'>
      <marquee><h1>Welcome to the online book store</h1></marquee>
      <img src={image} alt="Bookstore" className="bookstore-image" />
      <br /><br />
    
    </div>
  );
}

export default Home;
