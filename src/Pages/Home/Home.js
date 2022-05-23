import React from 'react';
import Contact from '../Contact';
import AllReviews from './AllReviews';
import AllTools from './AllTools';
import Banner from './Banner';
import Summary from './Summary';

const Home = () => {
    return (
      <div>
          <Banner></Banner>
          {/* <CountDown></CountDown> */}
          <Summary></Summary>
          <AllTools></AllTools>
          <AllReviews></AllReviews>
          <Contact></Contact>
  
      </div>
    );
};

export default Home;