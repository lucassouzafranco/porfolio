import React from 'react';
import Menu from './components/Menu/Menu';
import Bio from './components/Bio/Bio';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Espaço reservado para o Menu com a mesma altura do Menu */}
      <div style={{ height: '60px' }}></div>
      
      <Menu />
      <Bio />
    </div>
  );
};

export default App;
