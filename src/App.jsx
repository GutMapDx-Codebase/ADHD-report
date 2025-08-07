import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Box from './components/Box';
import Card from './components/Card';
import SecondCard from './components/secondCard';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Box />
      <Card />
      <SecondCard />
      <Footer />
    </div>
  );
}

export default App;
