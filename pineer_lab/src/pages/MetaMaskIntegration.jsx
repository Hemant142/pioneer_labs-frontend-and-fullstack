import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Web3 from 'web3';

const MetaMaskIntegration = () => {
  const [status, setStatus] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setStatus('Wallet connected successfully.');
      } catch (error) {
        setStatus('Failed to connect wallet.');
      }
    } else {
      setStatus('MetaMask extension not detected.');
    }
  };

  return (
    <Box>
      <Text fontSize="xl" mb={4}>MetaMask Wallet Integration</Text>
      <Button onClick={connectWallet} colorScheme="blue">Connect Wallet</Button>
      {status && <Text mt={4}>{status}</Text>}
    </Box>
  );
};

export default MetaMaskIntegration;
