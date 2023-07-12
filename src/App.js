import React from 'react';
import { BrowserRouter  , Routes,Route } from 'react-router-dom';
import TrainDetails from './components/TrainDetails';
import SingleTrainDetail from './components/SingleTrainDetail';
import trainData from './trainData';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<TrainDetails trainData={trainData} />} />
    <Route path="/train/:id" element={<SingleTrainDetail />} />
  </Routes>
</BrowserRouter>

  );
};

export default App;
