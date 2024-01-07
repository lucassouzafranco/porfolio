import React from 'react';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Espaço reservado para o Menu com a mesma altura do Menu */}
      <div style={{ height: '1em' }}></div>
      
      <Menu />
    </div>
  );
};

export default App;