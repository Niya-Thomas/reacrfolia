import React from 'react';
import './Home.css';

const Home = () => {
  const home = [
    {
      head: "hey,",
      body: "My Name Is",
      name: "NIYA THOMAS "
    }
  ];

  return (
    <div className='home-container'>
      <div className="name-section">
        {home.map((item, index) => (
          <div key={index}>
            <h1 className='name-head'>{item.head}</h1>
            {/* Optionally include other properties */}
            <h2 className='name-body'>{item.body}</h2>
            <h2 className='fullname'>{item.name}</h2>
            <div className='icon'>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        </div>
          </div>
        ))}
      </div>
      <div className="design">
        <h1 className='vertical'>portfolia</h1>
      </div>
    </div>
  );
};

export default Home;
