import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';



export default function UseFormControl(props) {
  return (
    <Box component="form" noValidate autoComplete="off" style = {{"margin":"0px auto 25px","width":"450px"}} >
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Try kubernetes, blog, git etc" onChange= {props.function}  style = {{"width":"450px"}}/>
        <FormHelperText >Response time : {props.responsetime} ms</FormHelperText>
      </FormControl>
    </Box>
  );
}
