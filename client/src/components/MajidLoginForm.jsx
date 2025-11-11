
import React, { useState } from 'react';
import { Avatar, Container, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


// import React from 'react'

const MajidLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleLoginForm = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
    
  };





  return (
   
        <Container maxWidth='sm'>
            <Paper elevation={10} sx={{marginTop:8, padding: 2}}>
                <Avatar sx={{
                    mx: 'auto',
                    bgcolor: 'secondary.main',
                    textAlign: 'center',
                    mb: 2,
                }}>    
                </Avatar>
               <Typography variant="h5" align="center" gutterBottom>
                     LOGIN
               </Typography>
                <Box component="form" onSubmit={handleLoginForm}  noValidate sx={{ mt: 1 }}>
                    <TextField 
                    placeholder='enter username'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                    autoFocus
                    error={email === ''}
                    helperText={email === '' ? 'Please enter your username' : ''}
                    margin="normal"
                    id="username"
                    name="username"
                    autoComplete="username"
                    />
                    <TextField 
                     placeholder='enter paassword'
                     type='password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     fullWidth
                     required
                     autoFocus
                     error={password === ''}
                     helperText={password === '' ? 'Please enter your password' : ''}
                     margin="normal"
                     id="password"
                     name="password"
                     autoComplete="password"
                    />
                    <button type="submit">LOGIN</button>
                
                   
                </Box>
                 
            </Paper>
        </Container>
    
  )
}

export default MajidLoginForm