import { Container, CssBaseline, Box} from '@mui/material';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import HeaderComponent from './component/HeaderComponent';
import EditIterenary from './screen/EditIterenary';
import NewTrip from './screen/NewTrip';

function App() {
  return (
  <>
    <CssBaseline />
    <Box maxWidth="xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewTrip />} />
          <Route path='edit' element={<EditIterenary />}/>
        </Routes>
      </BrowserRouter>
    </Box>   
  </>
  );
}

export default App;
