import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SideNavBar from '../components/Task1/SideNavBar';
// import PopulationGraph from '../components/Task2/PopulationGraph';
import CryptoPriceCard from '../components/Task3/CryptoPriceCard';
import PopulationGraph from '../components/Task2/PopulationGraph';

const Home = () => {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <Flex>
      <Box w="250px" >
        <SideNavBar activeItem={activeItem} setActiveItem={setActiveItem} />
      </Box>
      <Box flex="1" p={4}>
        {activeItem === 'Home' && <PopulationGraph />}
        {activeItem === 'Home' && <CryptoPriceCard />}
      </Box>
    </Flex>
  );
};

export default Home;
