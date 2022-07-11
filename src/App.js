import { useState } from 'react';
import List from './components/List';
import Details from './components/Details';

import './App.css';

const url =
  'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

function App() {
  const [info, setInfo] = useState();

  const handleClick = (user) => {
    setInfo(user);
  };

  return (
    <div
      className='d-flex justify-content-between align-items-start mt-5 mx-auto'
      style={{ width: '700px' }}
    >
      <List url={url} info={info} handleClick={handleClick} />
      <Details url={url} info={info} />
    </div>
  );
}

export default App;
