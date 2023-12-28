import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Menu = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        zIndex: 1000,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '98.4vw',
        color: 'black',
        padding: '10px',
        backgroundColor: 'transparent'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <DarkModeIcon sx={{ marginLeft: '1.5em', fontSize: '1.7em' }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography 
          sx={{ 
            margin: '0 0.7em', 
            fontSize: '1em', 
            '&:hover': { color: '#0C8CE9'}, 
            cursor: 'pointer' 
          }}
        >Sobre mim
        </Typography>
        <Typography 
          sx={{ 
            margin: '0 0.7em', 
            fontSize: '1em', 
            '&:hover': { color: '#0C8CE9'}, 
            cursor: 'pointer' 
          }}
        >Habilidades
        </Typography>
        <Typography 
          sx={{ 
            margin: '0 0.7em', 
            fontSize: '1em', 
            '&:hover': { color: '#0C8CE9'}, 
            cursor: 'pointer' 
          }}
        >Experiências
        </Typography>
        <Typography 
          sx={{ 
            margin: '0 0.7em', 
            fontSize: '1em', 
            '&:hover': { color: '#0C8CE9'}, 
            cursor: 'pointer' 
          }}
        >Contato
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
