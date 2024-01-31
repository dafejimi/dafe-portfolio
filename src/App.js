import logo from './logo.svg';
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './container/Home';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000'}}>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />         
      </Routes>
    </Box>
  );
}

export default App;
