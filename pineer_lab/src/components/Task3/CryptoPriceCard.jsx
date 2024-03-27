import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

const CryptoPriceCard = () => {
  const [cryptoData, setCryptoData] = useState({});

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        console.log(data,"AERFGKL")
        setCryptoData(data.bpi)});
  }, []);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl" mb={4}>Cryptocurrency Prices</Text>
      {Object.keys(cryptoData).map(currency => (
        <Box key={currency} mb={4}>
          <Text fontWeight="bold">{currency}: </Text>
          <Text>{cryptoData[currency].rate}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CryptoPriceCard;
