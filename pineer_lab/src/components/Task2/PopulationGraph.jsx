import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';

const PopulationGraph = ({ populationData }) => {
  if (!populationData || populationData.length === 0) {
    return (
      <Box>
        <Text fontSize="xl" mb={4}>Population Data</Text>
        <Text>No population data available</Text>
      </Box>
    );
  }

  const data = {
    labels: populationData.map(item => item.Year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map(item => item.Population),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Box>
      <Text fontSize="xl" mb={4}>Population Data</Text>
      <Line data={data} />
    </Box>
  );
};

export default PopulationGraph;
