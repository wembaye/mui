import React, {useState} from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomizedInputs = (props) => {
   const {data} = props
   const { id, age, firstName, lastName } = data[0]
    const [state, setState] = useState({id:id, age:age, firstName:firstName, lastName:lastName})
  console.log(state, 'state')

  return (
    <div>
    {data? 
    <Box
    
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          First Name
        </InputLabel>
        <BootstrapInput value={state.firstName}  id="bootstrap-input" onChange={(e)=>setState(prev=>({...prev, firstName:e.target.value}))} />
      </FormControl>
      
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Last Name
        </InputLabel>
        <BootstrapInput value={state.lastName}  id="bootstrap-input" onChange={(e)=>setState(prev=>({...prev, lastName:e.target.value}))} />
      </FormControl>
      
      <FormControl variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input">
        Age
      </InputLabel>
      <BootstrapInput value={state.age}  id="bootstrap-input" onChange={(e)=>setState(prev=>({...prev, age:e.target.value}))} />
      </FormControl>
    <FormControl variant="standard">
    <InputLabel shrink htmlFor="bootstrap-input">
      Password
    </InputLabel>
    <BootstrapInput defaultValue="" id="bootstrap-input" />
  </FormControl>

  <FormControl variant="standard">
  <InputLabel shrink htmlFor="bootstrap-input">
    Address
  </InputLabel>
  <BootstrapInput  id="bootstrap-input" />
</FormControl>
    </Box>:null }
    </div>
  );
}


export default CustomizedInputs;