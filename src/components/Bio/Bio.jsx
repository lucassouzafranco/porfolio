import React from 'react';
import { Box } from '@mui/material';
import profile from '../../assets/images/profile.jpg';

const Bio = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '99.8vw', 
        border: '1px solid red' 
      }}
    >
      <Box
        sx={{
          width: '66vw',
          border: '1px solid blue',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '8px', // Defina o raio da borda para criar bordas curvas
        }}
      >
        <img 
          src={profile} 
          alt="Profile Picture" 
          style={{ width: '32%', borderRadius: '18px'}}
        />
        
        <Box
          sx={{
            width: '15%',
            border: '1px solid gray',
            textAlign: 'center',
            paddingTop: '3em'
          }}
        >
        Desenvolvedor Front-End Jr.
        Graduando em Sistemas de Informação
        </Box>
      </Box>
    </Box>
  );
}

export default Bio;
