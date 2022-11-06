import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { setCountry, setProfession, setStacks } from '../../storage/slises/dataSlise';
import { useDispatch } from 'react-redux';

import Header from '../header/Header';
import Main from '../main/Main';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProfession());
    dispatch(setStacks());
    dispatch(setCountry());
  }, [])

  return (
    <BrowserRouter>
      <div className='wrapApp'>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
