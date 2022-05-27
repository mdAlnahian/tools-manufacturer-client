import React from 'react';
import Contact from '../Contact';
import AllReviews from './AllReviews';
import AllTools from './AllTools';
import Banner from './Banner';
import Banner2 from './Banner2';
import Summary from './Summary';

const Home = () => {
    return (
      <div>
          <Banner></Banner>
          {/* <CountDown></CountDown> */}
          <Summary></Summary>
          <AllTools></AllTools>
          <AllReviews></AllReviews>
          <Banner2></Banner2>
          <Contact></Contact>
  
      </div>
    );
};

export default Home;