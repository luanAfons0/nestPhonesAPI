'use client'

import { Box, Button, Container, Paper } from "@mui/material"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  const submitForm = () =>{
    console.log('Changing route')
    router.push('/dashboard')
  }

  return (
    <Container maxWidth='xl' sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={5} sx={{ height: '70%', width: '40%', padding: 5 }}>
        <Typography variant="h6" paddingBottom={2.5}>Informe a chave de entrada:</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ width: "100%" }} />
        <Box sx={{ marginTop: 2.5, width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
          <Button onClick={submitForm} variant="contained">Submit</Button>
        </Box>
      </Paper>
    </Container>
  )
}
