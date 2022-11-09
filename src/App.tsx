import { Container, CssBaseline, Box} from '@mui/material';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import HeaderComponent from './component/HeaderComponent';
import EditIterenary from './screen/EditIterenary';
import Home from './screen/Home';
import NewTrip from './screen/NewTrip';
import TripProfileList from './screen/TripProfileList';

function App() {
  return (
  <>
    <CssBaseline />
    <Box maxWidth="xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtrip" element={<NewTrip />} />
          <Route path='edit' element={<EditIterenary />}/>
          <Route path='tripprofile' element={<TripProfileList />} />
        </Routes>
      </BrowserRouter>
    </Box>   
  </>
  );
}

export default App;
