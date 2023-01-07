import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components'

import Home from './routes/home/home.components';

const Shop = () => {
  return (
    <div>
      <h1>From Shop Page</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Navigation/>} > 
        <Route index element = {<Home/>} />
        <Route path='/shop' element = {<Shop/>}/>
      </Route>
    </Routes>
  );
};

export default App;
