import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './pages/Home';
import MetaMaskIntegration from './pages/MetaMaskIntegration';

function App() {
  const theme = extendTheme({
    // Add custom theme configurations if needed
  });
  
  return (
    // <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metamask" element={<MetaMaskIntegration />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </Router>
    // </ChakraProvider>
  );
}

export default App;
